import ptf from '../../data/ptf'
import { IAction, Types } from '../actions'

interface ITeam {
  name: string
  score: number
}

interface ITeams {
  ct: ITeam
  t: ITeam
}

interface IPosition {
  x: number
  y: number
}

export interface IEntity {
  type: string
  id: number
  position: IPosition
}

interface ITick {
  entities: [IEntity]
}

export interface IRound {
  teams: ITeams
  ticks: [ITick]
}

interface IState {
  numberOfRounds: number
  currentRound: number
  rounds: Array<any>
  round: IRound | null
}

const initialState: IState = {
  numberOfRounds: 30,
  currentRound: 0,
  rounds: [
    {
      score: {
        ct: 0,
        t: 0,
      },
    },
  ],
  round: null,
}

export default (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case Types.LOAD_ROUND: {
      const currentRound = action.round
      const round = ptf.rounds[currentRound]

      // tslint:disable-next-line:no-console
      // console.log(ptf)

      return {
        ...state,
        currentRound,
        round,
      }
    }
    default: {
      return state
    }
  }
}

// export default pft
