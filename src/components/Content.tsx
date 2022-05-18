import Header from "./Header";
import React from "react";

const Content = () => {
	
	return (
		<>
			<Header/>
			<div className="content_wrapper">
				<div className="big_title">My projects</div>
				<div className="projects_wrapper">
					<div className="small_title">Octoprint projects</div>
					<div className="list_wrapper">
						<ul>
							<li><a href="https://github.com/iFrostizz/OctoPrint-EasyServo" target="_blank"><code>Easyservo</code></a>:
								mount servo motors in the interface
							</li>
							<li><a href="https://github.com/iFrostizz/OctoPrint-CalibrationCompanion" target="_blank"><code>Calibration
								companion</code></a>:
								calibrate your 3D printer in few clicks
							</li>
						</ul>
					</div>
					<div className="small_title">Web3 projects</div>
					<div className="list_wrapper">
						<ul>
							<li><a href="https://cryptobrokesquad.xyz/" target="_blank"><code>Cryptobroke</code></a>:
								NFT's for the brokest
							</li>
							<li><a href="https://www.betswirl.com/" target="_blank"><code>Betswirl</code></a>:
								a decentralized gaming platform that I've been developing staking contracts on
							</li>
							<li><a href="https://sparkies.io/" target="_blank"><code>Sparkies</code></a>:
								an NFT marketplace running on the Velas blockchain
							</li>
						</ul>
					</div>
					<div className="small_title">Building &nbsp;<img src={process.env.PUBLIC_URL + '/building.png'}
																													 className="small_emoji" /*alt="building"*//></div>
					<div className="list_wrapper">
						<ul>
							<li><a href="https://github.com/iFrostizz/fether" target="_blank"><code>Fether</code></a>:
								Hack and solve Ethernaut challenges using foundry
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Content