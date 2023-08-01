import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import MyResume from '../assets/Resume.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';




export default function Resume () {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
      ).toString();

    const [numPages, setNumPages] = useState()
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }){
        setNumPages(numPages)
    }

    const nextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1)
        } else if (pageNumber === numPages) {
            setPageNumber(1)
        }    
    }

    const makeFile = () => {
        const file = new File([makeBlob()], 'Resume.pdf', { type: 'application/pdf' })
        return file
    }

    return (
        <div className="box">
            <div className="row">
                <div className="col-12">
                    <Document file={MyResume} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} onClick={() => nextPage()}/>
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <a href={MyResume} download="Steven Underwood's Resume" target='_blank'>
                        <button type="button">Download Resume</button>
                    </a>
                </div>
            </div>
        </div>

    )
}