# fast-xml-parser

https://www.npmjs.com/package/fast-xml-parser

Input:

```xml
<SOAP-ENV:Body xmlns:m = "http://www.xyz.org/quotation">
  <m:GetQuotationResponse>
    <m:Quotation>Here is the quotation</m:Quotation>
  </m:GetQuotationResponse>
</SOAP-ENV:Body>
```

Output:

```json
{
  "result": {
    "SOAP-ENV:Body": {
      "m:GetQuotationResponse": {
        "m:Quotation": "Here is the quotation"
      }
    }
  }
}
```

Related:

- https://github.com/scarabaeus/xml2js-test
- https://github.com/scarabaeus/xml-js-test
- https://github.com/scarabaeus/fast-xml-parser-test

Download Stats:

- https://npmtrends.com/fast-xml-parser-vs-xml-js-vs-xml2js
