import { Button, Divider } from 'antd'
import * as _ from 'lodash'
import * as React from 'react'
import styled from 'styled-components'

const Content = styled.div``

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

interface IProps {
  numberOfRounds: number
  currentRound?: number
  onRoundClick?: (round: number) => void
}

class RoundSelector extends React.PureComponent<IProps> {
  // todo: Can we type this event?.
  public onRoundClick = (event: any) => {
    const { onRoundClick } = this.props
    const roundNumber = parseInt(event.target.dataset.roundNumber, 10)

    if (onRoundClick) {
      onRoundClick(roundNumber)
    }
  }

  public render() {
    const { numberOfRounds, currentRound } = this.props

    return (
      <Content>
        <Divider>{`Rounds`}</Divider>
        <Wrapper>
          {_.times(numberOfRounds, (roundNumber: number) => {
            const title = roundNumber + 1
            return (
              <Button
                key={roundNumber}
                data-round-number={roundNumber}
                type={roundNumber === currentRound ? 'primary' : 'default'}
                onClick={this.onRoundClick}>
                {title}
              </Button>
            )
          })}
        </Wrapper>
      </Content>
    )
  }
}

export default RoundSelector
