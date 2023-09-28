'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <div className="w-[480px] h-[750px] m-auto pt-12">
        <h2 className="text-center opacity-80 text-3xl font-mono pb-8 ">
          contact us
        </h2>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="focus:outline-none bg-[rgba(34,34,34,0.1)] w-full text-[black] px-5 py-4 rounded-[50px] border-[none]"
            type="text"
            {...register('name', {
              required: 'Name is required.',
              minLength: {
                value: 3,
                message: 'Min length is 3',
              },
            })}
            placeholder="name"
          />
          {errors.name && errors.name.type === 'required' && (
            <p className="text-[red]">Name is required.</p>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <p className="text-[red]">Name should be at-least 3 characters.</p>
          )}
          <input
            className="focus:outline-none bg-[rgba(34,34,34,0.1)] w-full text-[black] px-5 py-4 rounded-[50px] border-[none]"
            type="email"
            {...register('email', {
              required: 'Email is required.',
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            placeholder="email"
          />
          {errors.email && errors.email.type === 'required' && (
            <p className="text-[red]">Email is required.</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="text-[red]">Email is not valid.</p>
          )}
          <input
            className="focus:outline-none bg-[rgba(34,34,34,0.1)] w-full text-[black] px-5 py-4 rounded-[50px] border-[none]"
            type="text"
            {...register('title', {
              required: 'Title is required.',
              minLength: {
                value: 1,
                message: 'Min length is 1',
              },
            })}
            placeholder="title"
          />
          {errors.title && errors.title.type === 'required' && (
            <p className="text-[red]">Title is required.</p>
          )}
          {errors.title && errors.title.type === 'minLength' && (
            <p className="text-[red]">Title should be at-least 1 characters.</p>
          )}
          <input
            className="align-text-top focus:outline-none bg-[rgba(34,34,34,0.1)] w-full text-[black] h-56 px-5 py-4 rounded-[20px] border-[none] outline:none"
            type="text"
            {...register('text', {
              required: true,
              maxLength: {
                value: 300,
                message: 'Max length is 300',
              },
            })}
            placeholder="text"
          />
          {errors.text && errors.text.type === 'required' && (
            <p className="text-[red]">Do not send empty messages, please.</p>
          )}
          {errors.text && errors.text.type === 'maxLength' && (
            <p className="text-[red]">
              Max length for message is 300 characters.
            </p>
          )}
          <button className='className="no-underline m-12 px-5 py-[22px] border-2 border-solid border-[rgb(0,193,137)] hover:bg-[rgb(0,193,137)] hover:text-[white] transition-colors duration-500 ease-in-out mb-12'>
            SEND EMAIL
          </button>
        </form>
      </div>
    </>
  );
}
