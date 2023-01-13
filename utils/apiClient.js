import useEffect from "react";
import axios from "axios";
import https from 'https';
import useSWR from 'swr'

export const fetcher = (url) => fetch(url).then((res) => res.json());
export const sendFetcher = (url, { arg }) => fetch(url, { method: 'POST', body: JSON.stringify(arg)}).then((res) => res.json());

export const getImage = async (url, imgpath, fs) => {
  try{
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    const response = await axios({url,httpsAgent,responseType: 'stream'})
    const data = response.data.pipe(fs.createWriteStream(imgpath));
  } catch (e){
    console.log(e)
  }
};

export const verifyuser = async ({ username,passworc }) => {
  const res = await axios.post(`/api/auth`, { username,password });
  return res.data;
};


// STUDENT RECORD REQUESTS

export const fetchStudents = async () => {
  const res = await axios.get(`/api/student`);
  return { data, error, isLoading } = useSWR('/api/student', fetcher)
  //return res.data;
}; 

export const fetchStudent = async (id) => {
  const res = await axios.get(`/api/student?id=${encodeURIComponent(id)}`);
  return res.data;
}; 

export const postStudent = async (data) => {
  const res = await axios.post(`/api/student`,{...data});
  return res.data;
}; 

export const deleteStudent = async (id) => {
  const res = await axios.delete(`/api/student?id=${encodeURIComponent(id)}`);
  return res.data;
}; 


// CALENDAR RECORD REQUESTS

export const fetchCalendars = async () => {
  const res = await axios.get(`/api/calendar`);
  return { data, error, isLoading } = useSWR('/api/calendar', fetcher)
  //return res.data;
}; 

export const fetchCalendar = async (id) => {
  const res = await axios.get(`/api/calendar?id=${encodeURIComponent(id)}`);
  return res.data;
}; 

export const postCalendar = async (data) => {
  const res = await axios.post(`/api/calendar`,{...data});
  return res.data;
}; 

export const deleteCalendar = async (id) => {
  const res = await axios.delete(`/api/calendar?id=${encodeURIComponent(id)}`);
  return res.data;
}; 



// PARENT RECORD REQUESTS

export const postParent = async (data) => {
  const res = await axios.post(`/api/parent`,{...data});
  return res.data;
}; 

export const deleteParent = async (id) => {
  const res = await axios.delete(`/api/parent?id=${encodeURIComponent(id)}`);
  return res.data;
}; 



// ATTENDANCE RECORD REQUESTS

export const postAttendance = async (data) => {
  const res = await axios.post(`/api/attendance`,{...data});
  return res.data;
}; 

export const deleteAttendance = async (id) => {
  const res = await axios.delete(`/api/attendance?id=${encodeURIComponent(id)}`);
  return res.data;
}; 



// TRANSACTIONS RECORD REQUESTS

export const postTransacts = async (data) => {
  const res = await axios.post(`/api/transacts`,{...data});
  return res.data;
}; 

export const deleteTransact = async (id) => {
  const res = await axios.delete(`/api/transact?id=${encodeURIComponent(id)}`);
  return res.data;
}; 


