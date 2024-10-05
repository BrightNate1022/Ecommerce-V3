import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='container text-white' style={{marginTop:"8vh"}}>
        <table className='table table-dark table-striped' style={{height:"100vh"}}>
            <thead className='fw-bold fs-1' > 
                Contact us by
            </thead>
               
            <tbody> 
                <tr>
                    <th className='fw-bold text-center fs-3' style={{verticalAlign:"middle"}} scope='col'>Phone Number</th>
                    <th className='fw-bold text-center fs-3' scope='col' style={{verticalAlign:"middle"}}>888-888-8888</th>
                    
                </tr>
           
                <tr>
                    <td scope='col' className='fw-bold text-center fs-3' style={{verticalAlign:"middle"}}>Fax</td>
                    <td scope='col' className='fw-bold text-center fs-3' style={{verticalAlign:"middle"}}>888-888-8889</td>
                
                </tr>
                <tr>
                    <td scope='col' className='fw-bold text-center fs-3' style={{verticalAlign:"middle"}}>Email</td>
                    <td scope='col' className='fw-bold text-center fs-3' style={{verticalAlign:"middle"}}>Testsite@test.com</td>
                
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}
