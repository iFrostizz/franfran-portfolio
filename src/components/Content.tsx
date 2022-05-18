import Header from "./Header";
import React from "react";
import styled from 'styled-components'

const ContentWrapper = styled.div`margin-top: 50px;
  margin-left: 100px;`
const SmallTitle = styled.div`font-size: 2em;
  margin-left: 100px;`
const BigTitle = styled.div`font-size: 3em;
  margin-left: 100px;`
const ProjectWrapper = styled.div`margin-top: 50px;
  margin-left: 70px;`
const ListWrapper = styled.div`margin-left: 70px;`
const SmallEmoji = styled.img`width: 30px;
  height: 30px;
  position: absolute;
  margin-top: 10px;`

const Content = () => {
	
	return (
		<>
			<Header/>
			<ContentWrapper>
				<BigTitle>My projects</BigTitle>
				<ProjectWrapper>
					<SmallTitle>Octoprint projects</SmallTitle>
					<ListWrapper>
						<ul>
							<li><a href="https://github.com/iFrostizz/OctoPrint-EasyServo" target="_blank"
										 rel="noreferrer"><code>Easyservo</code></a>:
								mount servo motors in the interface
							</li>
							<li><a href="https://github.com/iFrostizz/OctoPrint-CalibrationCompanion" target="_blank"
										 rel="noreferrer"><code>Calibration
								companion</code></a>:
								calibrate your 3D printer in few clicks
							</li>
						</ul>
					</ListWrapper>
					<SmallTitle>Web3 projects</SmallTitle>
					<ListWrapper>
						<ul>
							<li><a href="https://cryptobrokesquad.xyz/" target="_blank" rel="noreferrer"><code>Cryptobroke</code></a>:
								NFT's for the brokest
							</li>
							<li><a href="https://www.betswirl.com/" target="_blank" rel="noreferrer"><code>Betswirl</code></a>:
								a decentralized gaming platform that I've been developing staking contracts on
							</li>
							<li><a href="https://sparkies.io/" target="_blank" rel="noreferrer"><code>Sparkies</code></a>:
								an NFT marketplace running on the Velas blockchain
							</li>
						</ul>
					</ListWrapper>
					<SmallTitle>Building &nbsp;<SmallEmoji src={process.env.PUBLIC_URL + '/building.png'}
																								 className="small_emoji" /*alt="building"*//></SmallTitle>
					<ListWrapper>
						<ul>
							<li><a href="https://github.com/iFrostizz/fether" target="_blank" rel="noreferrer"><code>Fether</code></a>:
								Hack and solve Ethernaut challenges using foundry
							</li>
						</ul>
					</ListWrapper>
				</ProjectWrapper>
			</ContentWrapper>
		</>
	)
}

export default Content