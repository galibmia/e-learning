import React from 'react';
import Cisco from '../../assets/logo/cisco.svg'
import Amazon from '../../assets/logo/amazon.svg'
import AMD from '../../assets/logo/amd.svg'
import DropCam from '../../assets/logo/dropcam.svg'
import Logitech from '../../assets/logo/logitech.svg'
import Spotify from '../../assets/logo/spotify.svg'

const TrustedBrand = () => {
    return (
        <div className='w-2/3 mx-auto'>
            <h5 className='text-center text-lg mb-8'>Trusted by the world’s best</h5>
            <div className='flex justify-between'>
                <img src={Cisco} alt="" />
                <img src={Amazon} alt="" />
                <img src={AMD} alt="" />
                <img src={DropCam} alt="" />
                <img src={Logitech} alt="" />
                <img src={Spotify} alt="" />
            </div>
        </div>
    );
};

export default TrustedBrand;