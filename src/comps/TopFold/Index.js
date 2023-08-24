import React from 'react'
import "./topfold.css"
import Button from '../../common/Button'

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
        <div className='tf-left'>
            <div className='tf-heding'>
                Explore Collections{""} OF
                <span className='heading-gradient'> Extraodinary</span> NFTs
            </div>
            <div className='tf-desc'>NFT stands for non-fungible token.
             It's generally built using the same kind of programming as cryptocurrency,
              like Bitcoin or Ethereum, but that's where the similarity ends.
              </div>
              <div className='tf-left-btns'>
                <Button btnTypes="PRIMARY" btnText="EXPLORE" />
                <Button btnTypes="SECONDARY" btnText="CREATE" customClass='tf-left-secondary-btn'/>
              </div>
              <div className='tf-left-infoStats'>
                <div className='tf-is-infoItem absolute-center'  >
                    <div className='tf-infoItem-count'>800k+</div>
                    <div className='tf-infoItem-label'>Collections</div>
                </div>
                <div className='tf-is-infoItem absolute-center' >
                    <div className='tf-infoItem-count'>20k+</div>
                    <div className='tf-infoItem-label'>Artists</div>
                </div>
                <div className='tf-is-infoItem absolute-center' >
                    <div className='tf-infoItem-count'>865k+</div>
                    <div className='tf-infoItem-label'>Community</div>
                </div>

              </div>
        </div>
        <div className='tf-right'>
            <div className='tf-r-bg-blob'></div>
            <div className='tf-right-diamond'>
                
                <div className='tf-r-diamond-items absolute-center'>
                    <img className='tf-r-diamond-img' 
                    alt='diamond-banner'
                    src='https://i.seadn.io/gae/on1C-c4dzXdY2A7Fa1msU64iE85IUK5AdEeTeWiOdy6_inbMTp3DmqmpGDJe22Ke2scqCLI3Y3Q1rsoZZmUob86g2z9Hy5TcHlYmyA?auto=format&dpr=1&w=128'
                    />

                </div>
                <div className='tf-r-diamond-items absolute-center'>
                    <img 
                    className='tf-r-diamond-img' 
                    alt='diamond-banner'
                    src='https://i.seadn.io/gae/BPPPAD1N4WR32BlekFqfLp72QeFHvCIrlub1uTplQTZxCgiy3Zhgw8jsR7xKe2la0sDiaWoay7NrbdnuCscbw_8G-4wtH7VcPvrKhg?auto=format&dpr=1&w=128'
                    />

                </div>
                <div className='tf-r-diamond-items absolute-center'>
                    <img 
                    className='tf-r-diamond-img' 
                    alt='diamond-banner'
                    src='https://i.seadn.io/gae/7tUr7mQ3z_FCWFdJ1qR88dcJ74BO3x0BAdNQFQRuRzzqEJ1Dw9avHKB0wEloG__X4f-ry51zJfoNMB7cUEnSGQc5vAHpUtBTLfELOA?auto=format&dpr=1&w=1920'
                    />

                </div>
                <div className='tf-r-diamond-items absolute-center'>
                    <img 
                    className='tf-r-diamond-img' 
                    alt='diamond-banner'
                    src='https://i.seadn.io/gae/pTr-v_3ZAbqzrhyiPZWNFSfcDwV4hLe2TvGy3_gUDZ5y-2PoxTknp0qE-diEUK02DVSraS4ZzPwa6saU9sPhC03H_cybswzx5aPi5A?auto=format&dpr=1&w=256'
                    />

                </div>

            </div>
        </div>
    </div >

  )
}

export default TopFold