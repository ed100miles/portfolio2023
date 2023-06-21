"use client"

import { useState } from "react"

const emptyBoard = Object.fromEntries([...Array(225)].map((_, idx) => [idx, ""]))

type Board = typeof emptyBoard


export default function Scrabble() {
  const [boardState, setBoardState] = useState(emptyBoard)
  const [isWriteDown, setIsWriteDown] = useState(false)
  const [focusedSquare, setFocusedSquare] = useState(112)

  const Board = ({ boardState }: { boardState: Board }) => {

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

    const handleKeyUp = (e: any, index: number) => {
      const newBoard = { ...boardState }
      if (/^[A-Z]$/i.test(e.key)) { // 1 alpha character
        newBoard[index] = e.key
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
      <div className="bg-teal-700 w-11/12 md:w-5/12 grid grid-cols-15 border rounded-sm">
        {
          Object.entries(boardState).map(([index, value]) => {
            return (
              <input
                className={`rounded-sm aspect-square text-center text-sm md:text-lg text-black
                  ${value === "" ? "bg-teal-700 border border-gray-400 " : "bg-orange-300 border-r border-b border-gray-700 drop-shadow-lg"}
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

  return (
    <main className="h-screen w-screen bg-sky-900 text-red-600 align-middle justify-center">
      <Board boardState={boardState} />
    </main>
  )
}
