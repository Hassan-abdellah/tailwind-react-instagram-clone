import React from 'react'
import { NavLink,Switch , Route} from 'react-router-dom';
import { useLocation } from 'react-router';
import Save from './save.svg';
import Grid from './grid.svg';
import Person from './person.svg';
import Posts from '../posts/Posts';
import Saved from '../saved/Saved';
import Tagged from '../tagged/Tagged';
const Profile = ({setModalOpen , setModalPost}) => {

    const location = useLocation();
    // const pathname = location.pathname;
    // console.log(pathname)
    return (
        <>
        {/* <div className="w-1100 ml-auto pl-14 pt-8"> */}
        <div className='conatiner xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-sm my-0 mx-auto'>
            <div className="flex justify-start py-6 px-4">
                <div className="sm:mr-10 mr-1">
                    <img src="/images/1.jpg" alt='' className="rounded-full sm:w-36 sm:h-36 w-24 h-24 object-cover"/>
                </div>
                <div className=" flex flex-col pt-3 pl-1 w-80">
                    <div className="flex items-center w-full sm:justify-between">
                        <h1 className="text-xl ml-2 sm:mr-4 mr-2">Hassan Abdellah</h1>
                        <button className="bg-blue-500 text-white hover:bg-blue-700 transition-all border-none outline-none px-4 py-1 rounded-md text-lg">Follow</button>
                    </div>
                    <div className="flex items-center pl-2 sm:mt-5 sm:mb-5 mt-1 mb-1 w-full justify-between">
                        <div className="flex items-center">
                            <span className="mr-1">827</span>
                            <span>posts</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-1">100k</span>
                            <span>followers</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-1">5</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div className="w-full pl-2">
                        Entreprenuer | Engineer | Model  
                    </div>
                </div>                
            </div>
            <div className="w-full bg-gray-300 h-1-px flex items-center justify-center"></div>
            <div className="relative flex items-center justify-center">
                <NavLink to="/profile" className="flex items-center mr-5 pt-1" activeClassName="border-t-2 border-black">
                    <img src={Grid} alt="" className="w-5 h-5 mr-1"/>
                    <span>POSTS</span>
                </NavLink>
                <NavLink to="/profile/saved" className="flex items-center mr-5 pt-1" activeClassName="border-t-2 border-black">
                    <img src={Save} alt="" className="w-5 h-5 mr-1"/>
                    <span>SAVED</span>
                </NavLink>
                <NavLink to="/profile/tagged" className="flex items-center pt-1" activeClassName="border-t-2 border-black">
                    <img src={Person} alt="" className="w-5 h-5 mr-1"/>
                    <span>TAGGED</span>
                </NavLink>
            </div>
        </div>
        <Switch>
            <Route exact path="/profile/">
                <Posts setModalOpen={setModalOpen} setModalPost={setModalPost}/>
            </Route>
            <Route path="/profile/saved">
                <Saved/>
            </Route>
            <Route path="/profile/tagged">
                <Tagged/>
            </Route>
        </Switch>
        </>
    )
}

export default Profile;
