import React from 'react'

const AddExpenseForm = () => {
  return (
    <form>
        <div className=''>
            <div className='col-sm'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' id='name' required />
            </div>
            <div className='col-sm'>
                <label htmlFor='cost'>Cost</label>
                <input type='text' className='form-control' id='cost' required />
            </div>
            <div className='col-sm mt-1'>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseForm
