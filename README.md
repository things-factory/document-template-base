# document-template-base

## Prerequisites
- [@things-factory/document-template-service](https://github.com/things-factory/document-template-service)

## How to use
1. run [@things-factory/document-template-service](https://github.com/things-factory/document-template-service)
1. add configuration into config.[production|development].js    
    ```js
      reportApiUrl: //document-template-service url(e.g. http://localhost:8888/rest/report/show_html)
    ```
1. request report result
    - way 1. using template string    
    ```js
    import { reportString2html } from './controllers'
    
    ...
    
    const html = await reportString2html({
      reportTemplateString: reportXML,
      data: {} // object data
    })
    
    ...
    ```
    - way 2. using local template file path
    ```js
    import { reportPath2html } from './controllers'
    
    ...
    
    const html = await reportPath2html({
      reportFilePath: reportFilePath,
      data: {} // object data
    })
    
    ...
    ```
    - way 3. using template file url
    ```js
    import { reportUrl2html } from './controllers'
    
    ...
    
    const html = await reportUrl2html({
      reportUrl: reportURL,
      data: {} // object data
    })
    
    ...
    ```
