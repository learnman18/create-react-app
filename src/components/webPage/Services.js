import React from "react";
import Cards from "./card";
import MyCoursesData from "./CoursesArray";

const Services = () => {
    return(
        <>
            <div>
                <h1 className="text-center py-3">Services</h1>
                <div className="container-fluid">
                    <div className="row mx-4">
                        {
                            MyCoursesData.map((currentCourse , i)=>{
                                // console.log(currentCourse , i);
                                return <Cards id={i} key={i} courseBtn={currentCourse.btn}
                                 courseDesc={currentCourse.description} courseImg={currentCourse.imgsrc}
                                 courseName={currentCourse.name}
                                ></Cards>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;