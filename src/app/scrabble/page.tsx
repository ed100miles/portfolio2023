"use client"
import { KeyboardEvent, useEffect, useState } from "react"
import { useDebounce } from "usehooks-ts"
import { DefinitionModal } from "./dialog";
import { LoadingSpinner } from "./spinner";

const emptyBoard = Object.fromEntries([...Array(225)].map((_, idx) => [idx, ""]))

const fetchFoundWords = async (env: string, debouncedBoard: typeof emptyBoard, debouncedLetters: string[]) => {
  let endpoint = ""
  if (env === "development") {
    endpoint = 'http://localhost:8000/'
  }
  else {
    endpoint = "https://scrabble23-kdoaodt3pa-nw.a.run.app/"
  }
  const response = await fetch(endpoint,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "board": debouncedBoard,
          "letters": debouncedLetters.join("")
        })
    })
  const foundWords = await response.json()
  return foundWords
}

export default function Scrabble() {
  const [boardState, setBoardState] = useState(emptyBoard)
  const [isWriteDown, setIsWriteDown] = useState(false)
  const [focusedSquare, setFocusedSquare] = useState(112)
  const [letters, setLetters] = useState<string[]>(Array(7).fill(""))
  const [boardFocused, setBoardFocused] = useState(true)
  const [focusedLetter, setFocusedLetter] = useState(0)
  const [foundWords, setFoundWords] = useState({})
  const [loadingFoundWords, setLoadingFoundWords] = useState(false)
  const debouncedBoard = useDebounce(boardState, 1000)
  const debouncedLetters = useDebounce(letters, 1000)

  useEffect(() => {
    if (debouncedLetters.join("") !== "") {
      setLoadingFoundWords(true)
      fetchFoundWords(process.env.NODE_ENV, debouncedBoard, debouncedLetters)
        .then(response => setFoundWords(response.found))
        .then(() => setLoadingFoundWords(false))
    }
  }, [debouncedBoard, debouncedLetters])

  const Board = () => {
    const handleNonAlphaKeys = (key: string, index: number) => {
      const newBoard = { ...boardState }
      switch (key) {
        case "ArrowUp": {
          setIsWriteDown(true)
          setFocusedSquare(index - 15 > -1 ? index - 15 : index + 225 - 15)
          break
        }
        case "ArrowDown": {
          setIsWriteDown(true)
          setFocusedSquare(index + 15 < 225 ? index + 15 : index - 225 + 15)
          break
        }
        case "ArrowLeft": {
          setFocusedSquare(index - 1 < 0 ? 224 : index - 1)
          setIsWriteDown(false)
          break
        }
        case "ArrowRight" || "Tab": {
          setIsWriteDown(false)
          setFocusedSquare(index + 1 < 225 ? index + 1 : 0)
          break
        }
        case "Backspace": {
          newBoard[index] = ""
          setBoardState(newBoard)
          if (!isWriteDown) {
            setFocusedSquare(index - 1 > 0 ? index - 1 : 0)
          } else {
            setFocusedSquare(index - 15 >= 0 ? index - 15 : index)
          }
        }
      }
    }

    const handleKeyUp = (e: KeyboardEvent, index: number) => {
      const newBoard = { ...boardState }
      if (/^[A-Z]$/i.test(e.key)) { // 1 alpha character
        newBoard[index] = e.key.toUpperCase()
        setBoardState(newBoard)
        if (isWriteDown) {
          setFocusedSquare(index + 15 < 225 ? index + 15 : index)
        } else {
          if ((focusedSquare + 1) % 15 !== 0) {
            setFocusedSquare(index + 1 < 225 ? index + 1 : 0)
          }
        }
      } else {
        handleNonAlphaKeys(e.key, index)
      }
    }

    return (
      <div
        className="bg-teal-700 grid grid-cols-15 border rounded-sm"
        onClick={() => setBoardFocused(true)}
      >
        {
          Object.entries(boardState).map(([index, value]) => {
            return (
              <input
                className={` aspect-square text-center text-sm md:text-xl text-black
                  ${value === ""
                    ? "bg-teal-700 border border-gray-400 rounded-sm"
                    : "bg-orange-300 border-r border-b border-gray-700 drop-shadow-lg rounded-md"}
                `}
                key={index}
                value={value.toUpperCase()}
                onChange={() => null} // dummy to supress warning
                onKeyDownCapture={(e) => handleKeyUp(e, Number(index))}
                autoFocus={Number(index) === focusedSquare}
                onClick={() => setFocusedSquare(Number(index))}
              >
              </input>
            )
          })
        }
      </div>
    )
  }

  const Letters = () => {
    const handleLetterChange = (e: KeyboardEvent, index: number) => {
      const newLetters = [...letters]
      if (/^[A-Z]$/i.test(e.key)) { // 1 alpha character
        newLetters[index] = e.key
        setLetters(newLetters)
        setFocusedLetter(focusedLetter + 1 >= 7 ? 0 : focusedLetter + 1)
      }
      else {
        switch (e.key) {
          case "Backspace": {
            if (newLetters[index] == "") {
              setFocusedLetter(focusedLetter > 0 ? focusedLetter - 1 : 6)
            } else {
              newLetters[index] = ""
              setLetters(newLetters)
            }
            break
          }
          case "ArrowLeft": {
            setFocusedLetter(focusedLetter > 0 ? focusedLetter - 1 : 6)
            break
          }
          case "ArrowRight": {
            setFocusedLetter(focusedLetter + 1 >= 7 ? 0 : focusedLetter + 1)
            break
          }
        }
      }
    }

    return (
      <div
        className="grid grid-cols-7 gap-1 max-w-md m-2"
        onClick={() => setBoardFocused(false)}
      >
        {letters.map((letter, index) => (
          <input
            key={index}
            value={letter.toUpperCase()}
            onChange={() => null}
            onClick={() => setFocusedLetter(index)}
            autoFocus={index == focusedLetter && !boardFocused}
            onKeyDownCapture={(e) => handleLetterChange(e, index)}
            className="aspect-square text-center text-sm md:text-xl text-black bg-orange-300 drop-shadow-lg rounded-lg"
          >
          </input>))}
      </div>
    )
  }

  const FoundWords = () => (
    <div className="text-black text-sm ">
      {Object.entries(foundWords).sort((a, b) => { return b[0].length - a[0].length }).map((word) => (
        <div key={word[0]} className="flex items-center">
          <div className="gap-1 w-5/6 h-5/6 m-2 grid grid-cols-12">
            {word[0].split("").map((letter, index) => (
              <span
                className="bg-orange-300 rounded-sm aspect-square drop-shadow-lg h-full flex justify-center items-center"
                key={word + String(index)}
              >{letter}
              </span>
            ))}
          </div>
          <DefinitionModal word={word} />
        </div>
      ))}
    </div >
  )

  return (
    <main className="h-screen w-screen bg-sky-900 flex flex-col md:flex-row justify-evenly items-center">
      <div className="w-5/6 md:w-2/5 aspect-square">
        <Board />
      </div>
      <div className="w-2/3 md:w-1/3 overflow-hidden flex flex-col justify-evenly h-1/3 md:h-full">
        <Letters />
        <div className="h-1/2 overflow-auto scrollbar-thumb-orange-300 scrollbar-track-sky-700 scrollbar-thin">
          {loadingFoundWords ? <LoadingSpinner /> : <FoundWords />}
        </div>
      </div>
    </main>
  )
}
