import * as Dialog from '@radix-ui/react-dialog';

export const DefinitionModal = (word: any) => {
  const [theWord, definition] = word['word']
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="bg-orange-300 rounded-full aspect-square m-2 drop-shadow-lg w-1/12 flex justify-center items-center "
        >{"?"}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed backdrop-blur-sm bg-sky-800 bg-opacity-70' />
        <Dialog.Content className='fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-orange-300 max-w-md rounded-lg p-4 text-black drop-shadow-2xl'>
          <Dialog.Title className='text-md md:text-lg'>{theWord}</Dialog.Title>
          <p className='text-sm md:text-md'>{definition}</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}