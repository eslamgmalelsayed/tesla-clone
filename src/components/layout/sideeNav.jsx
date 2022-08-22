// imports
import Fade from 'react-reveal/Fade';
import {useClickAway} from 'react-use';
import { useRef } from 'react';
import { GrClose } from 'react-icons/gr'
// comp start
const SideNav = ({toggle, setToggle}) => {
    // data
const links = [
    {
      "id": 1,
      "link": "model s",
    },
    {
      "id": 2,
      "link": "model 3",
    },
    {
      "id": 3,
      "link": "model x",
    },
    {
    "id": 4,
    "link": "model y",
    },
    {
    "id": 5,
    "link": "Solar Roof",
    },
    {
    "id": 6,
    "link": "Solar Panels",
    },
    {
    "id": 7,
    "link": "model 3",
    },
    {
        "id": 8,
        "link": "model x",
    },
  ]
    // mouse event
    const ref = useRef(toggle)
    useClickAway(ref, () => {
        setToggle(false)
    })
    // toggle nav
    const toggleNavBar = () => {
        setToggle(!toggle)
    }
    return (
        <>
            {/* side nav */}
            <div ref={ref}>
            <Fade right when={toggle}>
            { toggle &&
                <div className="side-nav fixed inset-y-0 bg-white right-0 w-2/3 md:w-80 p-7 font-semibold">
                    {/* toggle button */}                
                    <a onClick={toggleNavBar}  className='pt-5 text-xl pb-3 block m-3' href="#"><GrClose className='float-right' /></a>
                    {
                        links.map( ({id, link}) => (
                            <a key={id} className='text-start pt-3 block m-3' href="#">{link}</a>
                        ))
                    }
                </div>
            }
            </Fade>
            </div>
        </>
    )
}
export default SideNav