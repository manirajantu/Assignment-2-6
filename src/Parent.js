import React from 'react';
import Child from './Child';
import ThirdSibling from './ThirdSibling';

class Parent extends React.Component {

    // Functional component
    Sibling(){
        return <div><h4>Android</h4>
                    <p className='line'>Verifying your number</p>
                    <p className='line'>How to restore your chat history</p>
                    <p className='line'>How to manage your notifications</p>
                    <p className='line2'>View all questions</p>
                </div>
    }

   render(){
        return(<>
            <h1>Help Center</h1>
            <div className='main'>
                <div>
                    <td className='row1'><Child/></td>
                    <td className='row1'><this.Sibling/></td>
                    <td className='row1'><ThirdSibling/></td>
                </div>
                <div>
                    <td className='row1'><Child/></td>
                    <td className='row1'><this.Sibling/></td>
                    <td className='row1'><ThirdSibling/></td>
                </div>
            </div>



        </>);



}
}

export default Parent;