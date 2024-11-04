import Me from "../images/1720401499069.jpg"
export default function sidePanel(){
    return (
        //                <img src={Me} alt="me" />

        <>
            <div className="text-center centered-div font-roboto">
                <div className="m-2">
                    <h1 className="font-bold text-gray-400">About Me:</h1>
                    <h2 className = "text-gray-500 text-sm">I am a Computer Science student at the University of Pittsburgh’s David C. Frederick Honors College, passionate about integrating computer science with environmental science and finance to drive innovative solutions.</h2>

                </div>
                <div className="m-2">
                    <h1 className="font-bold text-gray-400">Currently:</h1>
                    <h2 className=" text-gray-500">Research Assistant in Human Computer Interaction at the University of Pittsburgh </h2>
                    <h2 className=" text-gray-500">Junior Analyst in the Information Technology Sector at Panther Equity</h2>
                </div>
            </div>
          
            

        </>
    



    );
  
    
}