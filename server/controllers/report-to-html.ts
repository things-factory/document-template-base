import FormData from 'form-data'
import fs from 'fs'
import fetch from 'node-fetch'
import path from 'path'
import { Writable } from 'stream'

import { config } from '@things-factory/env'

const REPORT_API_URL = config.get('reportApiUrl', 'http://localhost:8888/rest/report/show_html')

export async function report2html({ reportFile, data = {} }) {
  const formData = new FormData()

  formData.append('template', reportFile)
  formData.append('jsonString', JSON.stringify(data))

  const response = await fetch(REPORT_API_URL, {
    method: 'POST',
    body: formData
  })

  return await response.text()
}

export async function reportPath2html({ reportFilePath, data = {} }) {
  const reportFileStream = fs.createReadStream(reportFilePath)

  return await report2html({ reportFile: reportFileStream, data })
}

export async function reportUrl2html({ reportUrl, data = {} }) {
  const response = await fetch(reportUrl)

  const xml = await response.text()

  return await report2html({ reportFile: xml, data })
}
