'use client'
import {useForm} from 'react-hook-form'

export default function MealsFormSubmit(){
   console.log(useForm());
   const { formState: { isSubmitting } } = useForm();

   return <button disabled={isSubmitting}>
    {isSubmitting ? 'Submitting....': 'Share Meal'}
   </button>

}