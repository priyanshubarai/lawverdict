import { supabase } from "./supabaseClient";

export async function getUserByEmail(email) {
  const { data, error } = await supabase
    .from('contacts')      
    .select('*')          
    .eq('email', email)    
    .single();             

  if (error) {
    console.log("no user Found with email : ",email,error);
    return null;
  }
  return data;
}