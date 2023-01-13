const fs = require("fs");
const path = require("path");
//const sms = require("../config/sms");
const API = require("../model/apiModelSupabase");
import { NextApiRequest, NextApiResponse } from 'next';

export default {

  /* AUTHENTICATION */
  authenticateAdmin: async (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password } = req.body;
    try {
      var user = await API.verifyAdmin(username, password);
      if (user) {
        res.status(200).json({ success: true, user });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "Authentication failed!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  authenticateVoter: async (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password } = req.body;
    try {
      var user = await API.verifyVoter(username, password);
      console.log(user)
      if (user) {
        if (user.voted == 1) {
          res.status(200).json({
            success: false,
            msg: "You have Voted !!",
          });
        } else {
          const data = { ...user, photo: `/api/photos/?tag=${encodeURIComponent(username)}` }
          res.status(200).json({ success: true, data });
        }
      } else {
        res.status(200).json({
          success: false,
          msg: "Wrong Voter Credentials!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchTest: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchTest();
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  /* STUDENT RECORDS */

  fetchStudents: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchStudents(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchStudent: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.fetchStudent(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchStudentInfo: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { studinfo: id } = req.query
      var data = await API.fetchStudentInfo(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postStudents: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.postStudents(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  deleteStudent: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.deleteStudent(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },



  /* CALENDAR RECORDS */

  fetchCalendars: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchCalendars(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchCalendar: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.fetchCalendar(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postCalendar: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.postCalendar(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  deleteCalendar: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.deleteCalendar(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },



  /* CALENDAR RECORDS */

  fetchClasses: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchClasses(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchClass: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.fetchClass(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postClass: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.postClass(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  deleteClass: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.deleteClass(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },



  /* CALENDAR RECORDS */

  fetchParents: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchParents(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchParentInfo: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { profile: id } = req.query
      var data = await API.fetchParentInfo(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchParent: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.fetchParent(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postParent: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.postParent(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  deleteParent: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.deleteParent(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  /* TRANSACTIONS RECORDS */

  fetchTransacts: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchTransacts(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchTransact: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.fetchTransact(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postTransact: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.postTransact(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  deleteTransact: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.deleteTransact(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  /* ATTENDANCES RECORDS */

  fetchAttendances: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchAttendances(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchAttendance: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.fetchAttendance(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postAttendance: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.postAttendance(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  deleteAttendance: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id } = req.query
      var data = await API.deleteAttendance(id);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  /* UTILITY HELPERS */
  fetchHelpers: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchHelpers(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchHelpers2: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchHelpers2(req);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },













  /* ELECTIONS */
  fetchElectionByVoter: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { username } = req.query
      var data = await API.fetchElectionByVoter(username);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchElectionDataByVoter: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { username } = req.query
      var data = await API.fetchElectionDataByVoter(username);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data !",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  fetchElectionByCentre: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { cid } = req.query
      var data = await API.fetchElectionByCentre(cid);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchElectionByActiveCentre: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchElectionByActiveCentre();
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  postVoteStatus: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { finvote, username } = req.query;
      var data = await API.postVoteStatus(finvote, username);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchVotersByActiveCentre: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { search, page } = req.query;
      var data = await API.fetchVotersByActiveCentre(search, page);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },




  fetchVerifiedByActiveCentre: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchVerifiedByActiveCentre();
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchElectionDataById: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { eid, username } = req.query
      var data = await API.fetchElectionDataById(eid, username);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  /* VOTING & RECEIPT */
  postData: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var resp = await API.postVoteData(req.body);
      console.log(resp)
      res.status(200).json(resp);
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  syncVoteData: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { eid } = req.query
      var resp = await API.syncVoteData2(eid);
      res.status(200).json({ success: true, data: resp });
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchReceipt: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { rid, username } = req.query
      var data = await API.fetchReceipt(rid, username);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  /* ACTIVATION & VERIFICATION */
  /* RESULTS & AGREEMENT */

  /* MONITOR & STRONGROOM */
  fetchMonitor: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { mid } = req.query
      var data = await API.fetchMonitor(mid);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  /* CONTROLS */
  updateControl: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { id, data } = req.body;
      var resp = await API.updateControl(id, data);
      if (resp) {
        res.status(200).json({ success: true, data: resp });
      } else {
        res
          .status(200)
          .json({ success: false, data: null, msg: "Please Check settings!" });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  /* VOTERS & REGISTER */
  fetchRegister: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { gid } = req.query
      var data = await API.fetchRegister(gid);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  sendToVoter: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { sendvoter } = req.query
      var data = await API.sendToVoter(sendvoter);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  loadVoters: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var resp = await API.loadVoters();
      res.status(200).json({ success: true, resp });
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  /* CANDIDATES */
  /* PORTFOLIOS */

  /* CENTRES */
  activateCentre: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { activatecentre } = req.query
      var data = await API.activateCentre(activatecentre);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  loadCentre: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { loadcentre } = req.query
      var data = await API.loadCentreData(loadcentre);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  loadCentrePhotos: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { loadphoto } = req.query
      var data = await API.loadCentrePhotos(loadphoto);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  sendCrendentials: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { sendvoters } = req.query
      var data = await API.sendCrendentials(sendvoters);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },


  resetCentreElections: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { reset } = req.query
      var data = await API.resetCentreElections(reset);
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  fetchCentres: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var data = await API.fetchCentres();
      if (data) {
        res.status(200).json({ success: true, data });
      } else {
        res.status(200).json({
          success: false,
          data: null,
          msg: "No Data!",
        });
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },

  /* PHOTOS */

  fetchPhoto: async (req: any, res: any) => {
    const { eid, tag } = req.query
    var pic = await API.fetchPhoto(tag, eid); // Photo
    if (pic && pic.length > 0) {
      //var filepath = "/../.."+pic[0]?.path;
      var filepath = path.join(__dirname, "/../../../../backend", pic[0]?.path);
      var nonepath = path.join(__dirname, "/../../../", "none.png")
      console.log(filepath);
      console.log(__dirname);
      console.log("../../" + pic[0]?.path);
      try {
        var stats = fs.statSync(filepath);
        if (stats) {
          res.setHeader('Content-Type', 'image/jpg')
          res
            .status(200)
            .send(fs.readFileSync(filepath));
        } else {
          res.setHeader('Content-Type', 'image/png')
          res
            .status(200)
            .send(fs.readFileSync(nonepath));
        }
      } catch (e) {
        console.log(e);
        res.setHeader('Content-Type', 'image/png')
        res
          .status(200)
          .send(fs.readFileSync(nonepath));
      }
    } else {
      res.setHeader('Content-Type', 'image/png')
      res
        .status(200)
        .send(fs.readFileSync(path.join("./public/upload", "none.png")));
    }
  },

  /*
  fetchPhoto: async (req:any, res:any) => {
    const { eid,tag } = req.query
    var pic = await API.fetchPhoto(tag, eid); // Photo
    if (pic && pic.length > 0) {
      var filepath = path.join(__dirname, "/../../../public", pic[0]?.path);
      //var filepath = path.join("./public", pic[0]?.path);
      //var filepath = path.join(__dirname,"/../.././public", pic[0]?.path)
      var nonepath = path.join(__dirname,"../.././public", "none.png")
      console.log(filepath);
      console.log(__dirname);
      console.log(__dirname, "/../../../public", pic[0]?.path);
      try {
        var stats = fs.statSync(filepath);
        if (stats) {
          res.setHeader('Content-Type', 'image/jpg')
          res
            .status(200)
            .send(fs.readFileSync(filepath));
        } else {
          res.setHeader('Content-Type', 'image/png')
          res
            .status(200)
            .send(fs.readFileSync(nonepath));
        }
      } catch (e) {
        console.log(e);
        res.setHeader('Content-Type', 'image/png')
        res
          .status(200)
          .send(fs.readFileSync(nonepath));
      }
    } else {
      res.setHeader('Content-Type', 'image/png')
      res
        .status(200)
        .send(fs.readFileSync(path.join("./public/upload", "none.png")));
    }
  },
  */


  /*
  fetchPhoto: async (req:any, res:any) => {
    const { eid,tag } = req.query
    var pic = await API.fetchPhoto(tag, eid); // Photo
    if (pic && pic.length > 0) {
      var filepath = path.join(__dirname, "/../../../../backend", pic[0]?.path);
      console.log(filepath);
      try {
        var stats = fs.statSync(filepath);
        if (stats) {
          res.setHeader('Content-Type', 'image/jpg')
          res
            .status(200)
            .send(fs.readFileSync(path.join(__dirname, "/../../../../backend", pic[0]?.path)));
        } else {
          res.setHeader('Content-Type', 'image/png')
          res
            .status(200)
            .send(fs.readFileSync((path.join(__dirname, "/../../../../backend", "none.png"))));
        }
      } catch (e) {
        console.log(e);
        res.setHeader('Content-Type', 'image/png')
        res
          .status(200)
          .send(fs.readFileSync(path.join(__dirname, "/../../../../backend/upload", "none.png")));
      }
    } else {
      res.setHeader('Content-Type', 'image/png')
      res
        .status(200)
        .send(fs.readFileSync(path.join(__dirname, "/../../../../backend/upload", "none.png")));
    }
  },
  */

  postEvsPhoto: async (req: any, res: any) => {
    var { id, election_id } = req.body;
    //var imageBuffer = decodeBase64Image(req.body.photo);
    var spath = `./public/cdn/photo/evs/${election_id}`;
    const file = id == "logo" ? `${spath}/${id}.png` : `${spath}/${id}.jpg`;
    console.log(file);
    //fs.writeFile(file, imageBuffer.data, async function (err) {
    fs.writeFile(file, req.body.photo.data, async function (err: any) {
      if (err) {
        console.log(err);
        res
          .status(200)
          .json({ success: false, data: null, msg: "Photo not saved!" });
      }
      // Update Database
      /*
      const photo =
        id == "logo"
          ? `./public/cdn/photo/evs/${election_id}/${id}.png`
          : `./public/cdn/photo/evs/${election_id}/${id}.jpg`;
      const query =
        id == "logo"
          ? `update ehub_vote.election set logo = '${photo}'"`
          : `update ehub_vote.candidate set photo = '${photo}'"`;
      const result = await db.query(query);
      res.status(200).json({ success: true, data: result });
      */
    });
  },

  /* CONTROLS */
  saveControl: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      var resp = await API.saveControl(req.body);
      res.status(200).json({ success: true, resp });
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ success: false, data: null, msg: "Please Check settings!" });
    }
  },
};
