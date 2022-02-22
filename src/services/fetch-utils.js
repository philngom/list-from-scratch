import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({
    email,
    password
  });
  return response.user;
}
export async function signUp(email, password) {
  const response = await client.auth.signUp({
    email,
    password
  });
  return response.user;
}

export async function logOut() {
  await client.auth.signOut();
  return window.location.href = '../';
}

export async function addCountry(country) {
  const response = await client
    .from('countries')
    .insert([country]);

  return checkError(response);
}

export async function getMyCountries() {
  const response = await client
    .from('countries')
    .select()
    .order('id', { ascending: true });

  return checkError(response);
}

export async function visitCountry(id, bool) {
  const response = await client
    .from('countries')
    .update({ visited: bool })
    .match({ id });
  return checkError(response);
}

export async function fetchAllCountries() {
  const response = await fetch('/.netlify/functions/countries');
  const data = await response.json();
  return data;
}

export async function fetchQueriedCountries(query) {
  const response = await fetch(`/.netlify/functions/search?query=${query}`);
  const data = await response.json();
  return data;
}
