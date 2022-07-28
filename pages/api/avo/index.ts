import { NextApiRequest, NextApiResponse } from "http"
import DB from '@database'
// import enablePublicAccess from '@cors'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  try {

	const db = new DB()
	
	const allEntries = await db.getAll()
    const lenght = allEntries.length
	// response.statusCode = 200;
	// response.setHeader('Content-Type', 'application/json')
	response.status(200).json(allEntries)

  }
 catch (e) {
	    console.error(e)
		response.status(404).end()
	  }
}

export default allAvos
