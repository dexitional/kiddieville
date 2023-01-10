import useEffect from "react";
import axios from "axios";
import https from 'https';
import useSWR from 'swr'

export const fetcher = (url) => fetch(url).then((res) => res.json());

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

