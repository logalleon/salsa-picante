import { shuffle } from 'lodash'
import { randomInt } from 'ossuary/dist/lib/Random'
import React, { useState } from 'react'
import { Plane } from './components/Plane'
import { Plane as PlaneType, planes as planesData } from './data/planes'

const minShuffle = 1
const maxShuffle = 10

export const App = () => {

  const [planes] = useState(planesData)
  const [deck, setDeck] = useState<PlaneType[]>([])
  const [isReshuffling, setIsReshuffling] = useState(false)
  const [index, setIndex] = useState(0)
  const [activePlane, setActivePlane] = useState<PlaneType | null>(null)

  const createDeck = () => {
    let shuffled = [...planes]
    const iterations = randomInt(minShuffle, maxShuffle)
    for (let i = 0; i < iterations; i++) {
      shuffled = shuffle(shuffled)
    }
    setDeck(shuffled)
    setIsReshuffling(false)
    setIndex(0)
  }

  const drawFromDeck = () => {
    if (!isReshuffling) {
      setActivePlane(deck[index])
      if (index === deck.length - 1) {
        setIsReshuffling(true)
      } else {
        setIndex(index + 1)
      }
    } else {
      createDeck()
    }
  }

  return (
    <div>
      {activePlane && !isReshuffling && <Plane plane={activePlane} />}
      {!activePlane && !isReshuffling && <h1>Shuffle your deck to get started</h1>}
      {isReshuffling && <h3>Out of cards!</h3>}
      <button onClick={createDeck}>Create New Deck</button>
      {!!deck.length && <button onClick={drawFromDeck}>{isReshuffling ? 'Shuffle Deck' : 'Draw From Deck'}</button>}
    </div>
  )

}