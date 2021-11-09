
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const {pickup,dropof} = router.query


    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropofCoordinates, setDropofCoordinates] = useState([0, 0])

    const getPickupCoordinates = (pickup) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1Ijoia2hhbGlkNjM1IiwiYSI6ImNrcm5rY2RwaDF3eDMycXB2eHJyNmdlc3IifQ.SqJlljOy4JIOPzHnOA1pDQ",limit: 1
        }
        ))
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }
    const getDropofCoordinates = (dropof) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropof}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1Ijoia2hhbGlkNjM1IiwiYSI6ImNrcm5rY2RwaDF3eDMycXB2eHJyNmdlc3IifQ.SqJlljOy4JIOPzHnOA1pDQ",limit: 1
        }
        ))
        .then(response => response.json())
        .then(data => {
            setDropofCoordinates(data.features[0].center)
        })
    }
    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropofCoordinates(dropof);
    }, [pickup, dropof])
    return (
        <Wrapper>
        <ButtonContainer>
        <Link href="/Search">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </Link>
        </ButtonContainer>
            <Map pickupCoordinates={pickupCoordinates} dropofCoordinates={dropofCoordinates}/>
            <RideContainer>
                <RideSelector pickupCoordinates={pickupCoordinates} dropofCoordinates={dropofCoordinates}/>
                <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white text-xl my-4 mx-4  py-4 text-center
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`