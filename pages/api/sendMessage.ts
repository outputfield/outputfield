// import type { NextApiRequest, NextApiResponse } from "next";


export const sendMessage = async (
  destination: string,
  topic: string,
  subject: string,
  body: string
) => {

  // ADD EMAIL STUFF

  console.log(
    'NEW EMAIL:' +
    '\ndestination: \t'+destination+
    '\ntopic: \t\t\t'+topic+
    '\nsubject: \t\t'+subject+
    '\nbody: \t\t\t'+body
  )

  return false
}
