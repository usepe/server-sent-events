import { useState } from "react"

const useBufferedState = (len : number): [string[], (str: string) => void] => {
    const [buffer, setBuffer] = useState<string[]>([])

    const push = (str: string) => {
        setBuffer((currentBuffer) => {
            if (len === currentBuffer.length) {
                return [str, ...currentBuffer.slice(0, buffer.length - 1)]
            } else {
                return [str, ...currentBuffer]
            }
        })
    }

    return [buffer, push]
}

export { useBufferedState }
