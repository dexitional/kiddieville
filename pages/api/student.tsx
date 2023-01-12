import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import API from '../../backend/controller/apiController'
const app = nc<NextApiRequest, NextApiResponse>({
    onError: (err,req,res,next) => {
       console.error(err.stack);
       res.status(500).end("Something broke!");
    },
    onNoMatch: (req,res) => {
       res.status(404).end("Page is not found")
    }
})



app.get((req,res) => {
  const { id,studinfo } = req.query
  if(id) return API.fetchStudent(req,res)  // FETCH DATA BY STUDENTID
  else if(studinfo) return API.fetchStudentInfo(req,res)  // FETCH DATA BY STUDENTID
  else return API.fetchStudents(req,res)  // FETCH ALL DATA
})

app.post((req,res) => {
  return API.postStudents(req,res)  // FETCH DATA BY STUDENTID
})

app.delete((req,res) => {
   return API.deleteStudent(req,res)  // FETCH DATA BY STUDENTID
 })
 
export default app;
