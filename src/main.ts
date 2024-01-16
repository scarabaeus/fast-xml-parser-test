import express from 'express';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';

const app = express();

// const xml = `<?xml version="1.0" encoding="utf-8"?>
//   <note importance="high" logged="true">
//       <title>Happy</title>
//       <todo>Work</todo>
//       <todo>Play</todo>
//   </note>`;

const xml = `<SOAP-ENV:Body xmlns:m = "http://www.xyz.org/quotation">
<m:GetQuotationResponse>
   <m:Quotation>Here is the quotation</m:Quotation>
</m:GetQuotationResponse>
</SOAP-ENV:Body>`;

app.get('/', function (req, res) {
  const parser = new XMLParser();
  const result = parser.parse(xml);

  res.json({
    result: result,
  });
});

app.listen(8088);
