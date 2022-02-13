import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button} from '@mui/material';
import { LoginDataI } from '../../../interface/api/auth.interface';
import { LogIn } from '../../../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import { Form, useStyles } from './StyledComponent';

export const LoginForm:React.FC=()=> {
   const { control, handleSubmit, reset } = useForm<LoginDataI>();
    const classes = useStyles();

      const onSubmit: SubmitHandler<LoginDataI> = data => {
        console.log('FORM DATA>>>', data)
        if (!validateEmail(data.email)) return;
        dispatch(LogIn(data));
        reset();
      };

      const dispatch = useDispatch();

      const validation = (value: any, num: any, text: any, email: any) => {
        if (email) {
          return !validateEmail(value) ? text : '';
        }
        return value.length < num ? text : '';
      };
    
      const validateEmail = (email: string) => {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
      };
  
    return(
    <Form onSubmit={handleSubmit(onSubmit)}>
     <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField           
              {...field}
              className={classes.inputText}
              InputProps={{
                 className: classes.input,
              }}
              label="E-mail"
              variant="outlined"
              error={field.value.length !== 0 && !validateEmail(field.value) ? true : false}
              helperText={field.value.length !== 0 && !validateEmail(field.value) ? 'Enter correct email.' : ''}
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ minLength: 8 }}
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.inputText}
              InputProps={{
                 className: classes.input,
              }}
              type="password"
              label="Password"
              variant="outlined"
              error={
                field.value.length !== 0 && !!validation(field.value, 8, 'Password must be at least 8 characters.','')
              }
              helperText={
                field.value.length !== 0 && validation(field.value, 8, 'Password must be at least 8 characters.','')
              }
              required
            />
          )}
        />

      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
           {'Log In'}
      </Button>
    </Form>
    )
}