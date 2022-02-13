import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormWrapper } from './StyledComponent'
import { LoginForm } from '../../components/Auth/LoginForm';
import { SignInForm } from '../../components/Auth/SignInForm';


function FormRow() {
  return (
    <>      
        <FormWrapper>
         <LoginForm/>
         <SignInForm/>
        </FormWrapper>
    </>
  );
}


export const AuthPage:React.FC = () => {
    return (   
      <Box sx={{ flexGrow: 1}}>
      <Grid
          sx={{ height: '100vh'}}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }} 
          columns={{ xs: 4, sm: 8, md: 12 }}>     
             <Grid item xs={2} sm={4} md={4} >
               <FormRow/>
             </Grid>
      </Grid>
    </Box>
    )
}


