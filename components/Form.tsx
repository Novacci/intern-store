'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import '../app/styles/Form.scss';

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
      <div className="form-container">
        <h2>contact us</h2>
        <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-style"
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
            <p className="errorMsg">Name is required.</p>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <p className="errorMsg">Name should be at-least 3 characters.</p>
          )}
          <input
            className="input-style"
            type="email"
            {...register('email', {
              required: 'Email is required.',
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            placeholder="email"
          />
          {errors.email && errors.email.type === 'required' && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="errorMsg">Email is not valid.</p>
          )}
          <input
            className="input-style"
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
            <p className="errorMsg">Title is required.</p>
          )}
          {errors.title && errors.title.type === 'minLength' && (
            <p className="errorMsg">Title should be at-least 1 characters.</p>
          )}
          <input
            className="input-text-style"
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
            <p className="errorMsg">Do not send empty messages, please.</p>
          )}
          {errors.text && errors.text.type === 'maxLength' && (
            <p className="errorMsg">
              Max length for message is 300 characters.
            </p>
          )}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
