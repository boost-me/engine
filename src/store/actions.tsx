// Action Types

export const Types = {
  LOAD_ROUND: 'LOAD_ROUND',
}

// Action Interfaces

interface IActionLoadRound {
  type: string
  round: number
}

export type IAction = IActionLoadRound

// Action Creators

export const loadRound = (round: number): IActionLoadRound => ({
  type: Types.LOAD_ROUND,
  round,
})
