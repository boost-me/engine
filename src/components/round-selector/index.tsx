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
  activeRound?: number
}

class RoundSelector extends React.PureComponent<IProps> {
  public render() {
    const numberOfRounds = this.props.numberOfRounds
    const activeRound = this.props.activeRound

    return (
      <Content>
        <Divider>{`Rounds`}</Divider>
        <Wrapper>
          {_.times(numberOfRounds, (i: number) => {
            const roundNumber = i + 1
            return (
              <Button
                type={roundNumber === activeRound ? 'primary' : 'default'}>
                {roundNumber}
              </Button>
            )
          })}
        </Wrapper>
      </Content>
    )
  }
}

export default RoundSelector
