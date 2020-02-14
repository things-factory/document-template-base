import { config } from '@things-factory/env'
import FormData from 'form-data'
import fs from 'fs'
import fetch from 'node-fetch'

const REPORT_API_URL = config.get('reportApiUrl', 'http://localhost:8888/rest/report/show_html')

type report2htmlInput = {
  reportFile: String | fs.ReadStream
  data: Object
  isFile?: Boolean
}

export async function report2html({ reportFile, data = {}, isFile }: report2htmlInput) {
  const formData = new FormData()

  formData.append('template', reportFile)
  formData.append('jsonString', JSON.stringify(data))
  if (isFile) formData.append('isFile', isFile)

  const response = await fetch(REPORT_API_URL, {
    method: 'POST',
    body: formData
  })

  return await response.text()
}

export async function reportPath2html({ reportFilePath, data = {} }) {
  const reportFileStream = fs.createReadStream(reportFilePath)

  return await report2html({ reportFile: reportFileStream, data, isFile: true })
}

export async function reportUrl2html({ reportUrl, data = {} }) {
  const response = await fetch(reportUrl)

  const xml = await response.text()

  return await report2html({ reportFile: xml, data })
}

export async function reportString2html({ reportTemplateString, data = {} }) {
  return await report2html({ reportFile: reportTemplateString, data })
}
