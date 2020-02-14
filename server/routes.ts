import { reportPath2html, report2html, reportUrl2html, reportString2html } from './controllers'

const REPORT_API_URL = 'http://localhost:8888/rest/report/show_html'

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  /*
   * fallback white list를 추가할 수 있다
   *
   * ex)
   * var paths = [
   *   'aaa',
   *   'bbb'
   * ]
   * fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
   */
  var paths = ['report2html']
  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})

process.on('bootstrap-module-route' as any, (app, routes) => {
  /*
   * koa application에 routes 를 추가할 수 있다.
   *
   * ex) routes.get('/path', async(context, next) => {})
   * ex) routes.post('/path', async(context, next) => {})
   */
  /* report api sample
   *
  routes.get('/report2html', async (context, next) => {
    const html = await reportString2html({
      reportTemplateString: `<?xml version="1.0" encoding="UTF-8"?>
      <!-- Created with Jaspersoft Studio version 6.11.0.final using JasperReports Library version 6.11.0-0c4056ccaa4d25a5a8c45672d2f764ea3498bebb  -->
      <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Invoice" pageWidth="595" pageHeight="842" columnWidth="483" leftMargin="56" rightMargin="56" topMargin="56" bottomMargin="56" uuid="4eedbb89-b4f6-4469-9ab6-f642a1688cf7">
        <property name="com.jaspersoft.studio.data.defaultdataadapter" value="One Empty Record"/>
        <property name="com.jaspersoft.studio.unit." value="pixel"/>
        <style name="Title" forecolor="#FFFFFF" fontName="Times New Roman" fontSize="50" isBold="false" pdfFontName="Times-Bold"/>
        <style name="SubTitle" forecolor="#CCCCCC" fontName="Times New Roman" fontSize="18" isBold="false" pdfFontName="Times-Roman"/>
        <style name="Column header" forecolor="#666666" fontName="Times New Roman" fontSize="14" isBold="true"/>
        <style name="Detail" mode="Transparent" fontName="Times New Roman"/>
        <style name="Row" mode="Transparent" fontName="Times New Roman" pdfFontName="Times-Roman">
          <conditionalStyle>
            <conditionExpression><![CDATA[$V{REPORT_COUNT}%2 == 0]]></conditionExpression>
            <style mode="Opaque" backcolor="#EEEFF0"/>
          </conditionalStyle>
        </style>
        <style name="Table">
          <box>
            <pen lineWidth="1.0" lineColor="#000000"/>
            <topPen lineWidth="1.0" lineColor="#000000"/>
            <leftPen lineWidth="1.0" lineColor="#000000"/>
            <bottomPen lineWidth="1.0" lineColor="#000000"/>
            <rightPen lineWidth="1.0" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table_TH" mode="Opaque" backcolor="#FFFFFF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table_CH" mode="Opaque" backcolor="#CACED0">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table_TD" mode="Opaque" backcolor="#FFFFFF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
          <conditionalStyle>
            <conditionExpression><![CDATA[$V{REPORT_COUNT}%2 == 0]]></conditionExpression>
            <style backcolor="#D8D8D8"/>
          </conditionalStyle>
        </style>
        <style name="Table 1_TH" mode="Opaque" backcolor="#F0F8FF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table 1_CH" mode="Opaque" backcolor="#BFE1FF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table 1_TD" mode="Opaque" backcolor="#FFFFFF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table 2_TH" mode="Opaque" backcolor="#FFFFFF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table 2_CH" mode="Opaque" backcolor="#FFBFBF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <style name="Table 2_TD" mode="Opaque" backcolor="#FFFFFF">
          <box>
            <pen lineWidth="0.5" lineColor="#000000"/>
            <topPen lineWidth="0.5" lineColor="#000000"/>
            <leftPen lineWidth="0.5" lineColor="#000000"/>
            <bottomPen lineWidth="0.5" lineColor="#000000"/>
            <rightPen lineWidth="0.5" lineColor="#000000"/>
          </box>
        </style>
        <subDataset name="items" uuid="463dfe1e-7d21-4fbd-a663-020966f53e23">
          <queryString>
            <![CDATA[]]>
          </queryString>
          <field name="item_index" class="java.lang.String"/>
          <field name="pallet_no" class="java.lang.String"/>
          <field name="item_desc" class="java.lang.String"/>
          <field name="qty" class="java.lang.String"/>
          <field name="weight" class="java.lang.String"/>
          <field name="remarks" class="java.lang.String"/>
        </subDataset>
        <queryString>
          <![CDATA[]]>
        </queryString>
        <field name="company_name" class="java.lang.String"/>
        <field name="address" class="java.lang.String"/>
        <field name="tel_no" class="java.lang.String"/>
        <field name="company_no" class="java.lang.String"/>
        <field name="receive_company_name" class="java.lang.String"/>
        <field name="receive_company_address" class="java.lang.String"/>
        <field name="item_index" class="java.lang.String"/>
        <field name="pallet_no" class="java.lang.String"/>
        <field name="item_desc" class="java.lang.String"/>
        <field name="qty" class="java.lang.String"/>
        <field name="weight" class="java.lang.String"/>
        <field name="logo" class="java.lang.String"/>
        <field name="grn_no" class="java.lang.String"/>
        <field name="date" class="java.lang.String"/>
        <field name="ref_no" class="java.lang.String"/>
        <field name="vehicle_no" class="java.lang.String"/>
        <field name="container_no" class="java.lang.String"/>
        <title>
          <band height="216" splitType="Stretch">
            <staticText>
              <reportElement x="0" y="115" width="30" height="25" uuid="57aed2b1-4f4e-40a3-a6ad-54dae8dd4c5a">
                <property name="local_mesure_unitheight" value="pixel"/>
                <property name="com.jaspersoft.studio.unit.height" value="px"/>
              </reportElement>
              <textElement>
                <font size="11" isBold="true"/>
              </textElement>
              <text><![CDATA[TO:]]></text>
            </staticText>
            <textField>
              <reportElement x="40" y="115" width="190" height="15" uuid="daf4f0d3-e9f2-41fb-b927-bd5aa3713a15"/>
              <textElement>
                <font isBold="true"/>
              </textElement>
              <textFieldExpression><![CDATA[$F{receive_company_name}]]></textFieldExpression>
            </textField>
            <textField textAdjust="StretchHeight">
              <reportElement x="40" y="130" width="190" height="40" uuid="9c927a08-426a-47bb-be35-49c54cf811d0"/>
              <textFieldExpression><![CDATA[$F{receive_company_address}]]></textFieldExpression>
            </textField>
            <textField>
              <reportElement x="385" y="145" width="98" height="15" uuid="0b1b2784-e96c-4aa5-a81e-ca6d64c22296"/>
              <textFieldExpression><![CDATA[$F{ref_no}]]></textFieldExpression>
            </textField>
            <textField>
              <reportElement x="385" y="115" width="98" height="15" uuid="d3288b0a-c5d9-4237-86c4-431ecba4e19d"/>
              <textFieldExpression><![CDATA[$F{grn_no}]]></textFieldExpression>
            </textField>
            <textField>
              <reportElement x="385" y="160" width="98" height="15" uuid="c403ba8a-46c7-4986-bb7e-cd5440a435c2"/>
              <textFieldExpression><![CDATA[$F{vehicle_no}]]></textFieldExpression>
            </textField>
            <textField>
              <reportElement x="385" y="130" width="98" height="15" uuid="c01d5e12-d34f-49f8-85fe-9c3d0aacfc06"/>
              <textFieldExpression><![CDATA[$F{date}]]></textFieldExpression>
            </textField>
            <image hAlign="Center" vAlign="Middle" isLazy="true">
              <reportElement x="0" y="0" width="65" height="60" uuid="94883631-a913-43e2-b182-ab8d77d0181e"/>
              <imageExpression><![CDATA[$F{logo}]]></imageExpression>
            </image>
            <staticText>
              <reportElement x="0" y="80" width="483" height="30" uuid="5ba7093c-c54c-4857-97d2-f784ce80ebcc"/>
              <box>
                <pen lineWidth="0.0"/>
              </box>
              <textElement textAlignment="Center" verticalAlignment="Middle">
                <font size="14" isBold="true"/>
              </textElement>
              <text><![CDATA[GOOD RECEIVED NOTE]]></text>
            </staticText>
            <staticText>
              <reportElement x="300" y="145" width="73" height="15" uuid="185175eb-501d-4d39-acbc-7cbf77495f46"/>
              <text><![CDATA[Our Ref No.]]></text>
            </staticText>
            <staticText>
              <reportElement x="300" y="115" width="73" height="15" uuid="85047a70-8b5e-427c-a5d5-8fe0c9271475"/>
              <text><![CDATA[GRN No.]]></text>
            </staticText>
            <staticText>
              <reportElement x="300" y="160" width="73" height="15" uuid="e176d632-cf96-43fa-8d93-d8856d0476a0"/>
              <text><![CDATA[Vehicle No.]]></text>
            </staticText>
            <staticText>
              <reportElement x="300" y="130" width="73" height="15" uuid="d9d1a42d-a326-4dab-b456-5a3d04fa6b20"/>
              <text><![CDATA[Date]]></text>
            </staticText>
            <staticText>
              <reportElement x="300" y="175" width="73" height="15" uuid="bd9c2524-479b-4ef0-9a96-9cd302a2486e"/>
              <text><![CDATA[Container No.]]></text>
            </staticText>
            <textField>
              <reportElement x="385" y="175" width="98" height="15" uuid="6507179e-f4a3-4868-ba4c-64c5ddb129ef"/>
              <textFieldExpression><![CDATA[$F{container_no}]]></textFieldExpression>
            </textField>
            <frame>
              <reportElement x="80" y="0" width="403" height="55" uuid="8aed198d-91ec-41f0-baa8-c00fb83ae31a"/>
              <textField>
                <reportElement x="0" y="40" width="403" height="15" uuid="572c973e-fb7d-46bb-b6f7-5ab88892814d"/>
                <textFieldExpression><![CDATA[$F{tel_no}]]></textFieldExpression>
              </textField>
              <textField>
                <reportElement x="0" y="25" width="403" height="15" uuid="15062a8e-fecc-447b-a2a9-552f05441029"/>
                <textFieldExpression><![CDATA[$F{address}]]></textFieldExpression>
              </textField>
              <frame>
                <reportElement x="0" y="0" width="403" height="25" uuid="61854d15-b6c4-4f72-9743-d530afaa0b3c">
                  <property name="com.jaspersoft.studio.layout" value="com.jaspersoft.studio.editor.layout.FreeLayout"/>
                </reportElement>
                <textField>
                  <reportElement x="0" y="0" width="270" height="25" uuid="343920c3-b2ce-492b-8064-6b84c732653d">
                    <property name="local_mesure_unitheight" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                  </reportElement>
                  <textElement verticalAlignment="Bottom">
                    <font size="19" isBold="true"/>
                  </textElement>
                  <textFieldExpression><![CDATA[$F{company_name}]]></textFieldExpression>
                </textField>
                <textField>
                  <reportElement x="270" y="0" width="133" height="25" uuid="e0dcf4d0-05b0-45ca-95d5-9b76bfacbc5b"/>
                  <textElement textAlignment="Left" verticalAlignment="Bottom">
                    <font isBold="true"/>
                  </textElement>
                  <textFieldExpression><![CDATA["(Company No. " + $F{company_no} + ")"]]></textFieldExpression>
                </textField>
              </frame>
            </frame>
          </band>
        </title>
        <detail>
          <band height="208">
            <componentElement>
              <reportElement x="0" y="0" width="483" height="208" uuid="5f2b8982-f7e5-4baa-a59b-fb99cd0bcd7b">
                <property name="com.jaspersoft.studio.layout" value="com.jaspersoft.studio.editor.layout.VerticalRowLayout"/>
                <property name="com.jaspersoft.studio.table.style.table_header" value="Table 2_TH"/>
                <property name="com.jaspersoft.studio.table.style.column_header" value="Table 2_CH"/>
                <property name="com.jaspersoft.studio.table.style.detail" value="Table 2_TD"/>
                <property name="com.jaspersoft.studio.components.autoresize.proportional" value="true"/>
                <property name="com.jaspersoft.studio.components.autoresize.next" value="true"/>
              </reportElement>
              <jr:table xmlns:jr="http://jasperreports.sourceforge.net/jasperreports/components" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports/components http://jasperreports.sourceforge.net/xsd/components.xsd">
                <datasetRun subDataset="items" uuid="b36b6107-f5cc-4c09-ba2f-4ffebbc0f9f1">
                  <dataSourceExpression><![CDATA[((net.sf.jasperreports.engine.data.JsonDataSource)$P{REPORT_DATA_SOURCE}).subDataSource("items")]]></dataSourceExpression>
                </datasetRun>
                <jr:column width="25" uuid="89aca7e2-d9e2-4f0a-9f37-49f004ee4596">
                  <property name="com.jaspersoft.studio.components.table.model.column.name" value="Column1"/>
                  <jr:columnHeader style="Column header" height="30" rowSpan="1">
                    <staticText>
                      <reportElement x="0" y="0" width="25" height="30" uuid="323929d8-47c1-49f6-884b-b3cb357b864e"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle">
                        <font isBold="true"/>
                      </textElement>
                      <text><![CDATA[No.]]></text>
                    </staticText>
                  </jr:columnHeader>
                  <jr:columnFooter style="Column header" height="30" rowSpan="1"/>
                  <jr:detailCell style="Row" height="20">
                    <textField>
                      <reportElement x="0" y="0" width="25" height="20" uuid="9922d4ad-4311-459d-8744-a47f8917a200"/>
                      <textElement textAlignment="Right" verticalAlignment="Middle"/>
                      <textFieldExpression><![CDATA[$V{REPORT_COUNT}]]></textFieldExpression>
                    </textField>
                  </jr:detailCell>
                </jr:column>
                <jr:column width="91" uuid="279af0bf-249a-4850-be59-ce84ea5346de">
                  <property name="com.jaspersoft.studio.components.table.model.column.name" value="Column2"/>
                  <jr:columnHeader style="Column header" height="30" rowSpan="1">
                    <staticText>
                      <reportElement x="0" y="0" width="91" height="30" uuid="b3a1f258-f6cf-40bb-a7b1-cdfe2ebdf7b6"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle">
                        <font isBold="true"/>
                      </textElement>
                      <text><![CDATA[Pallet No.]]></text>
                    </staticText>
                  </jr:columnHeader>
                  <jr:columnFooter style="Column header" height="30" rowSpan="1"/>
                  <jr:detailCell style="Row" height="20">
                    <textField>
                      <reportElement x="0" y="0" width="91" height="20" uuid="1dc9363a-80c9-468d-ac45-fbae85be0092"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle"/>
                      <textFieldExpression><![CDATA[$F{pallet_no}]]></textFieldExpression>
                    </textField>
                  </jr:detailCell>
                </jr:column>
                <jr:column width="172" uuid="6c9c10a4-6496-427a-b49a-a0dfe40a0d7c">
                  <property name="com.jaspersoft.studio.components.table.model.column.name" value="Column3"/>
                  <jr:columnHeader style="Column header" height="30" rowSpan="1">
                    <staticText>
                      <reportElement x="0" y="0" width="172" height="30" uuid="744ea618-546a-4c89-b11d-82eb28ebd26a"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle">
                        <font isBold="true"/>
                      </textElement>
                      <text><![CDATA[Item Description]]></text>
                    </staticText>
                  </jr:columnHeader>
                  <jr:columnFooter style="Column header" height="30" rowSpan="1"/>
                  <jr:detailCell style="Row" height="20">
                    <textField>
                      <reportElement x="0" y="0" width="172" height="20" uuid="142d9d4c-6650-4bef-8c9d-dfdcfcac601b"/>
                      <textElement textAlignment="Left" verticalAlignment="Middle"/>
                      <textFieldExpression><![CDATA[$F{item_desc}]]></textFieldExpression>
                    </textField>
                  </jr:detailCell>
                </jr:column>
                <jr:column width="41" uuid="f0cb746f-2778-4c73-92b1-775241c40f56">
                  <property name="com.jaspersoft.studio.components.table.model.column.name" value="Column4"/>
                  <jr:columnHeader style="Column header" height="30" rowSpan="1">
                    <staticText>
                      <reportElement x="0" y="0" width="41" height="30" uuid="2e979a96-4d93-4377-9b29-d4aed8ac95f9"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle">
                        <font isBold="true"/>
                      </textElement>
                      <text><![CDATA[Qty (Carton)]]></text>
                    </staticText>
                  </jr:columnHeader>
                  <jr:columnFooter style="Column header" height="30" rowSpan="1"/>
                  <jr:detailCell style="Row" height="20">
                    <textField>
                      <reportElement x="0" y="0" width="41" height="20" uuid="ac279c74-2b6f-40f6-9288-4a2e61110cf9"/>
                      <textElement textAlignment="Right" verticalAlignment="Middle"/>
                      <textFieldExpression><![CDATA[$F{qty}]]></textFieldExpression>
                    </textField>
                  </jr:detailCell>
                </jr:column>
                <jr:column width="40" uuid="283b8365-dc07-4921-bc39-a838b46e51cd">
                  <property name="com.jaspersoft.studio.components.table.model.column.name" value="Column5"/>
                  <jr:columnHeader style="Column header" height="30" rowSpan="1">
                    <staticText>
                      <reportElement x="0" y="0" width="40" height="30" uuid="28c42f18-b077-4f5f-a320-e86b8fb0c617"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle">
                        <font isBold="true"/>
                      </textElement>
                      <text><![CDATA[G.Weight]]></text>
                    </staticText>
                  </jr:columnHeader>
                  <jr:columnFooter style="Column header" height="30" rowSpan="1"/>
                  <jr:detailCell style="Row" height="20">
                    <textField>
                      <reportElement x="0" y="0" width="40" height="20" uuid="afa90789-8fd5-49b4-bc16-25a58d94270c"/>
                      <textElement textAlignment="Right" verticalAlignment="Middle"/>
                      <textFieldExpression><![CDATA[$F{weight}]]></textFieldExpression>
                    </textField>
                  </jr:detailCell>
                </jr:column>
                <jr:column width="114" uuid="23d9894d-4e50-4074-ab17-ddfc26d5582d">
                  <property name="com.jaspersoft.studio.components.table.model.column.name" value="Column6"/>
                  <jr:columnHeader style="Column header" height="30" rowSpan="1">
                    <staticText>
                      <reportElement x="0" y="0" width="114" height="30" uuid="0e77846f-7e1f-44c2-9c4e-9f2f48ca34a8"/>
                      <textElement textAlignment="Center" verticalAlignment="Middle">
                        <font isBold="true"/>
                      </textElement>
                      <text><![CDATA[Remarks]]></text>
                    </staticText>
                  </jr:columnHeader>
                  <jr:columnFooter style="Column header" height="30" rowSpan="1"/>
                  <jr:detailCell style="Row" height="20">
                    <textField>
                      <reportElement x="0" y="0" width="114" height="20" uuid="4fe547ff-a550-48e0-9d7a-afe95c8760db"/>
                      <textElement textAlignment="Left" verticalAlignment="Middle"/>
                      <textFieldExpression><![CDATA[$F{remarks}]]></textFieldExpression>
                    </textField>
                  </jr:detailCell>
                </jr:column>
              </jr:table>
            </componentElement>
          </band>
        </detail>
      </jasperReport>
      `,
      data: {
        logo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAABEZVhJZk1NACoAAAAIAAIBEgADAAAAAQABAACHaQAEAAAAAQAAACYAAAAAAAKgAgAEAAAAAQAAAEOgAwAEAAAAAQAAAEMAAAAAmBv2SgAAAgJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjY3PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjY3PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Ck1PbGMAABF8SURBVHgB7Vt5kBTXff56rt3Z2XsXll3uY7kPicuC5TCWEkdlJJAsGZDiOJGcP5SjUq44cixLwlYc23/kj1hHyrZQIrlSFZWJVbERRsgRQrYwBnMv14JgQbCAWPa+5ujpzve9noYBhIxgh9qU/GpnuvtN93u/3/d+9+u1khea3dZXX4VlWeAX+qO5joNAaRlK7roLkaoqM+R77Sk09aXNef/McvOU2g4QC1m4vTKCSNBCyG65gPY1zxGHYL+BAduGVTMC0SlTLoJxpCOF7efZTx76CfObRiORdlGZF8CU8rAHBkmDFYzwEwIC/bNmbiAAhPM4Ho9sLj9BIhDmJWcbMGC4JCxEifCbR61/9Qk//gGMLAHIGRgSPqmH13R26crvHWjHnIEx0Bi9Hnr+AEYWSrcOjIGvJbhlYDC+GfDtloHx/0AwcikZrgmwBrw4ZBHIsDN37VJsd/Uciv4kLebjn6uTTXmSEVkOoDHM56MGM0/d/FdOwciOLXx9FLtpGpCg5SJMpqNhoDRioZCU5IUCBoSU46IrBX5c9NiAcoi0S4Ay4Nw82x8+Qg7BsJBZaM7Mcx8EojIsBkwrDaKC6Usec4MCZo4R5olhciuGbTKeIGIpN2CAONubxvZmB819BJHP91MKdRUiOQPDJfue0FM+iIoYGFscwORSC6MLLcTIPDN9k7S5cEBBgcsM36a0SCOifCDfdVDEi0ElAQwhcLtaHRxqB5K8Nyu/uoqpG+3IGRhiSB+/zSwPgNkyisKWEXlHNQ+tMr+kFr1UhYQtWFyjLpKWcICA8rcAgakhehX5FkYWuvjVB2m0JChNfL4/W87AyCZSoJQpoyc8XHgeaQvIZHvSwsluG2d74YFByVA8ErYcREmZgBuS70lUJYGQKk0rCyBCMXr3vIszUhuNl4169sQfcW7Ull9p0uG3nIGhKS5NQynhhcT7dK+D451kpNfFhQTQRwMp2yKQDE/64rVHo4t6rv6e1jQmlTkYVxjAYIIzhrpTRjHbSjtyqMOlZF0/KBzazKfxZbinEtz8jM7lDAwfbR3F6Ps9LrY12zjJYyJ9yTPQgVzdeD+FwDQR30zQzp1xsDfiYs4gVqZKaEcIytLhIUwoYT9tSRPB7SWwQtQfMoPrxXEEgKQoFnIxpTRAKbMIbsAYZd2UEzBERHYTQ4cpDUf4kaqo4nW9TWMZVeBXB5ndfM5BRxK4Y3AQJRFgYomFqjzLqIwAP02Va+fvlzyZB4BUTt5rSIGF6nwXw2NUN47p0GMZEeZEOQFDzIuJbFDUJ6ay+9h13U3P6XnaWOxoATp58rnhoFummAccjKWHqi0KMjZxcIFgxGmQ5a3kigv4YAnVqijsGpVI8Tf1y+Gn6bG0Nho/J2B4DIt9r1mMG0LSlX5oAkTifrhdlXYHE2g/qqOyIZYBq4JcVhRI/jItM6+T1v0SAtHlojkOnOjmMRHAZwhqjEjkBAxNF7RIUIYiEWBrmfqpSe8Vsh9sA97rcCBPU8JItpxqMKqAqlDE0n84SKMt12xBpqSlO4nzfQ4+oP3ptC26Ztoh2pkyqswSo1NcsH6i7/cOo8CrP5twlqt1KXXn6GLP8qO+3VSZymiK6iMIqCqKZilKbXGH7ltSReXgjVINqYqiXr/dGjA0edak/uT9cZT0MT672JI0iE1039nY62dJ0pX3eopz8dHcSIYCagUzMlR+84Js/yp3Rw9zsp8F0PXOJmnJSRMt2cKgVRnoLUdgUCK0OFkAyAMM9JYjm+Gl7xcBEBDZSpyFirqNn/GP/E0YCkh9crRaWRRcOs0RGB5H2Yw4DG7k4mXJBYAPguKGgqAXDKm2oUBIuYYKOn0M23XO202Gy1tvxBRc4vb3nOUOjOyJBQDZsPlNvpl6uyhgXFDFYGkMaxxVjBPy2BdjnK7UvieRZoXLQcINopnR5FEmY81M2RV9CpBsW5Q9zc2e3xowyIRWvZa1CCVIFcwpAkzTi/PDKIwyUsooQ1pg8SoSdZCXSBEgC6PYN6Eoia54Gu/3WdjfaaEzdSnRu1kAsp/PHRgEgH9e43LOrAjCKUqhnEWaNJnvtRUBOehuPAH75AmkW1phd3bAYp+bF0EqVow4X3SJjBiJcGkpBjP3qMyzWd+w8NtWxhIERiomSbnRJvqyg8EcgUGlyKJSp8VMm+1QFIlIGPEPWpB4522kdv4OycMH4bScZ2aVYOjsh0G0HRG+M1JQAKuyCqG6RYitXIlweTmGBfpwV9jBjvagKQGKoRtRGz8EGs7wPS9TL8gJGIZArll21BnKi8Jtb0P7OzvQ+dO1cPftgJtIwGLZzwqSmhBzCSuLHLmi7i64HW1INh6Fe/oUoitWITJpInOQMJZEbPSxen68WybXawL9WsD4Blt36ryYgE4qBqbww+zetKzZvY7++jYEZqiU8ezeuQOtL/8HEju301X0wQqFYOXJXlyjGa4IEoFSwmVv2oiug/sRue8BlC5dioJBlVg4qAcVZOpUXwBd9DxxWlibiZmPzkWQ2CWVinK4KA11GW3WrHKVFGmjmKD42105A8OwmEFcOXfX+l8gvmUzQSBzVIGP1aRzYbqf5rNIvPAvuPDmBpQ+9tcYtngRhtIOJfkOWZyZxVnakRNdtikn6uW1AGuNUSYuRax5VNMoj2RhJyhVJD0R6oZqHoEwacnodE7AMNECV9PRbpEaiXK00nxvTGpxQ03ASkoCUaSPN6Dte//E4Z5BYV0dAhw3P2VjYhFYJw0jSWZdxTV6hPNyVnMuY9nD7FXM99Fvuak+9Ozbj/wZ0xAqLMxtgOf6VpSRlsHFvzak3eAXx7C4mk5LM85/59toWvMSes7SANMm9QZCxkv1JZJI0jUn4in09CbR3htHZ9xGN4XCzc+HG8lD4ugxdD/7r+j90XNwe1grZMuJZPhseuuhK2/v49K1f8eNHwUILlBt1jyP5KY3kbf4MwjPnovA6NEIlLBinDFaprLFxXDifXTfbXBOnURy716kNqyD29iA8PgJlBRPWnMIhqjxTZjHtK76ExDICMvrHGtA/NhRJF77CQI0rPGiIvTxdc5BUXowmyFsMgGntw9OVye9UwdcHi2pkWyXPFmGqByBoTiDM1ymFrLZOWiyRXTJxsG2t8BtPQ+b9iNFvUzSBWtB5EoNPd4WHgVBAJB1m7vbWS1HYJA0GTGtmprBhS5MR6+nf7/NoPyipLjU/BhtQiFn0lal2vXOmSMwruDV0JQB5oqfcnGpmYyt+JiD36Cfu45ZrlATkwPcOjyug8Crb8kdGFfMpdhjoLdbBoaM2EBvtwyMK93sQAQmd2BIFLLFwbjZgS0euQNDNuKyOGMgysLlNOUODL2dki0ZmndgC0YmN1FoajaGfWyyqZYXyL6+HM2rr3g/31STKw1kS4apjmsePpHdf/UAt65HPCswzCyaQjZGhooOtWsuMMR4thv8aDAuv9t/juEux7A5ka2JNKnSdyZXJpO9CIbncL0AyT//MCw0y8dslxPmPewPkyHTDXHRGLX6i2Ol2trdto0buGAs0/NmU24gsZJyMSPU8rx/LvNw8mnigOIzzQKJn3Wk1ZFhPsBkKXz77QixbsmRYR99D86ZJjOH0vkwiy5BTqY92QRziTArTmEWfrQODvvSBFDwOBxPZKja5RHAG0wVTC+ncSB1Zy2gcJZU6nZzzl/Z5d3BPpMSaOHZ47IoFCqMoXLRIgRZdeMcZhaNmDWkuTTXOtNg12qGlmv86NGZgUoAZ+5Tv3+uLrJkrrP71O+3j5rDv+daR38u//hh9/nzXgbGh934SeoLnT1zBs8/+xzCLOFLSObVLUB7aysaG4/jS488gsFV1UglkxRjYSuVCLCQrfIbRZjynubrQQnugeglEIllkL+9d+Qo3li/Dm1t7SzJBbD03mWoqanBa2vXYtiIEfjs3XfThITMs3pIliqfYtrQ0ICf/8/PcO7sGTN+hPdMnjYdS+68E9XV1Uhrr4VNapN2bKq0XlLzVMumutpMyaV6AabooksqFmH9M4+8pdI2M3Y+yN/Fpyr3fLkHNnmIMMuVsQ+lqK/vvvsuDuzfjzFjx2FM7QT86p3N2LplC+5YuIg1wziKCotRWVbElNxhlswNnKYmJFjmr6mpRrQgxu3AHkOoagYOSwhHjhzBv73wAmqGDsOESZPQ2d0D9+w5rHnxRdwxvw6LlrAqxcK4QJaC5Ofn4dSp0/jW00/jKIG8jbYmxprkkYZDWPf6elPjXLZ8OeK9vehlkSZOmitYxFHFu6m52diOctqmKPdZ4qSrl2W8UDjEGnIe53DQ3t6BEAFJpjwvJ0DaW9tQUhRDaVkZ/PJ0aPiI4fj7xx/H1x//B3zhoVW4/8EHsXf3bq56Gmv/61X09HQjP1qAL/7Zn2LOnNl4Y8Mb2Lp1K8eT97Ewacpk3HnnHyOqqhIRt2QIWckWM9NmzMD8BQswtGYourq62BcjwVE+x9Xjs1rFEO93uKJrfvgDtFEif0DApk6fTgbTiPclsGfPLrNIr/30v7H5rU0opmFesGghPjVvHn788is40djI+UJcpCDqFi7EzJmz8Nz3v49PE/D7P38fF3oLXn7pJXzxkS/jxIlG/O/GN7iIQ9FHYHv4WX7/fVh27z1G4kgTN325nSclyOOg0YhXS06lUli69HN4+OFV2EJJWb9uPeopPc8++zxVIUQCx2Lf3no88bUn8Ms3N5IgVpu5UjZB1FhiuJ61xg3rXsep908aifIAoFoQAP0HtCrXEa5YN8tw27Ztw2QCO2v27fQmafz7i2vwz898C5s3vY3Xf/4z/ObXv8b2bVuxYGEd7iHxr639CY42HMZXvvJ3+MaT38Cw4cPx9JNP4e1Nb2Hfvn1ooueSyna0t2Prb7agjQXkxmPH8VtKfFX1EHztiX80RwHV3sY35di84g5XVKuq1wa04rLvZeVlGD9hojHzFZUVZM5FN8VNiB4/fhwdnZ0o5j//3zFvvhHjRDJlVjtMPQ8Ze5LGylUr8eCDX0CstBgHDh0w71zK6jjpFNIEVNvMSepxfqwEU6dNw4njx3Cg/gCqh9ZQHbr5VnAT6uvrUTt+PKqqBhu7UTu+1gB46v1TGDFyJEZxUcK0NzMoEWn7h2hh0Vcg9FA1pTJd3JUL8FpqQ/wxaHAVJfY2VA8ZgskTJ+HwwQPQwl8EQ68ByAaodihQbPrfFMvtCYqvVjjJm23q96xZMyn2dYZI8otz585h8ZLFuHupZxBtGqkQ9+pc7lqlOcZLP3oRG6lWf/W3f0MGhxqD+wvagCMNR7HqoYewfPl9CHBuvab4JFf1qaeewsMrV6F2gse8VLQgFsOjjz2GHdu3Yfeu3UiQDpcG8oFVD+HrX/0q9uxdgeLiYuyv38eFmYd7ly3j+A34zx+/gkOHDmL//npju0aOGoOdv9tJe3ca3169Gq/QPOynBH3+gQdQXlFhwAiuXr36m0KwrKwCs+fMwTAaRbURfHjq9Bm0xHnGHkznRsvYcTSw42rpaRrR2dmN2Z+ai4WfXowSDpZM2saQpWTFadkr2Ddi1GgSMhRTpk43KxIjY+P4/FD2TZo0BdWcS+9cJOklQpxn6vTbUMod915KX5pWXs//+Zf/EnPnzzeqM3LEKEyhd4nQPg0aPBhDKO49tEX53Av5o8/+Cb70F4/ymVEYW1trAOqjIZ0zdy4e5RhjR4/BW798E83NF3DP0nsQi+ajbn4dVqxYYYyxeLboglwxItHSLpRESYYtSWL8HTGzH5lRo1AwbAiTNMkdy89pe88Mxi/PbdEmaDwTSlExeK/pZx+HN9GdVFL9ftPvIRpeSaJcpK6DNIohqp0kU/oqm6N5zVg8l4eQBJr/SeHY/IE2i9IZIl0652+ybzKu3V3d+N53v4M9u3bhyW8+g9mzZ3KTid6MIl5Ioy5X+4kJunr5ykM3JU5hvSWwCKZegQgQ/LJibi3y+hMDhvIY4kAMMtJlfJ53HZZUsf0f/x7qRbzEsd0AAAAASUVORK5CYII=',
        company_name: 'EL COLD CHAIN LOGISTICS SDN BHD',
        company_no: '773091-U',
        address:
          'L1-43, Jalan Sungai Kapar Indah 2/KU7, Kawasan Industri Hi-Tech, Sungai Kapar Indah, 42200 Klang, Selangor Darul Ehsan.',
        tel_no: '603-3080 8030 / 8020 / 8021',
        receive_company_name: 'EVERGREEN SPEED SDN BHD',
        receive_company_address: 'No 3A-A ,1st Floor, Jalan Euro 3, Seksyen U3,\n 40150 Shah Alam Selangor',
        grn_no: 'GRN - 1119/00003/ES',
        date: '2019/11/14',
        ref_no: 'ELCCL/2019/00028',
        container_no: 'OERU4109160',
        items: [
          {
            pallet_no: 'ord1234',
            item_desc: 'Order 1',
            qty: 300
          },
          {
            pallet_no: 'ord1235',
            item_desc: 'Order 2',
            qty: 500
          },
          {
            pallet_no: 'ord1236',
            item_desc: 'Order 3',
            qty: 190
          },
          { pallet_no: '=<K>psjlL2', item_desc: '=<K>psjlL2', qty: 806 },
          { pallet_no: '<wQjGw=sCe', item_desc: '<wQjGw=sCe', qty: 432 },
          { pallet_no: 'NnScDwBOdC', item_desc: 'NnScDwBOdC', qty: 107 },
          { pallet_no: 'W=hP;qPkjE', item_desc: 'W=hP;qPkjE', qty: 997 },
          { pallet_no: 'lhC2UK55sN', item_desc: 'LhC2UK55sN', qty: 565 },
          { pallet_no: '_5Y]lo:IQX', item_desc: '_5Y]lo:IQX', qty: 427 },
          { pallet_no: 'XGpyiLCAZ;', item_desc: 'XGpyiLCAZ;', qty: 205 },
          { pallet_no: 'bWs]Oj\\dBt', item_desc: 'BWs]Oj\\dBt', qty: 279 },
          { pallet_no: 'm`5K9t4Xp_', item_desc: 'M`5K9t4Xp_', qty: 349 },
          { pallet_no: 'bHx4Ao2XB2', item_desc: 'BHx4Ao2XB2', qty: 830 },
          { pallet_no: 'Xgvad1v2RY', item_desc: 'Xgvad1v2RY', qty: 139 },
          { pallet_no: 'KcaT8^R2S\\', item_desc: 'KcaT8^R2S\\', qty: 547 },
          { pallet_no: 'o2_W=]soCz', item_desc: 'O2_W=]soCz', qty: 676 },
          { pallet_no: 'I5fOsmp66s', item_desc: 'I5fOsmp66s', qty: 272 },
          { pallet_no: 'tai97e1fQ:', item_desc: 'Tai97e1fQ:', qty: 68 },
          { pallet_no: '3Khciu<3Ph', item_desc: '3Khciu<3Ph', qty: 250 },
          { pallet_no: 'jNWVoqVu1W', item_desc: 'JNWVoqVu1W', qty: 435 },
          { pallet_no: 'Sv2jgeYJqp', item_desc: 'Sv2jgeYJqp', qty: 97 },
          { pallet_no: 'PH2>8PQnYI', item_desc: 'PH2>8PQnYI', qty: 997 },
          { pallet_no: '9FbvAqce]F', item_desc: '9FbvAqce]F', qty: 1000 },
          { pallet_no: 'iR6rVZMdh^', item_desc: 'IR6rVZMdh^', qty: 433 },
          { pallet_no: 'W>uVu9t6f@', item_desc: 'W>uVu9t6f@', qty: 319 },
          { pallet_no: 'HyXX`RbU4a', item_desc: 'HyXX`RbU4a', qty: 409 },
          { pallet_no: 'T\\Y^M[RwR>', item_desc: 'T\\Y^M[RwR>', qty: 698 },
          { pallet_no: '_car3LRmKT', item_desc: '_car3LRmKT', qty: 718 },
          { pallet_no: 'j7TM=uM36@', item_desc: 'J7TM=uM36@', qty: 291 },
          { pallet_no: 'tJTpGiUCSi', item_desc: 'TJTpGiUCSi', qty: 847 },
          { pallet_no: 'M@hye5mGeN', item_desc: 'M@hye5mGeN', qty: 206 },
          { pallet_no: 'AImdWe5:Y<', item_desc: 'AImdWe5:Y<', qty: 126 },
          { pallet_no: '@^RNnca=nN', item_desc: '@^RNnca=nN', qty: 497 },
          { pallet_no: 'EhwTcF`jnQ', item_desc: 'EhwTcF`jnQ', qty: 787 },
          { pallet_no: 'IIxBt1xNc:', item_desc: 'IIxBt1xNc:', qty: 420 },
          { pallet_no: 'FIpDsP6;JP', item_desc: 'FIpDsP6;JP', qty: 995 },
          { pallet_no: 'I<WjaWTqae', item_desc: 'I<WjaWTqae', qty: 625 },
          { pallet_no: '6@WE8KS7;_', item_desc: '6@WE8KS7;_', qty: 28 },
          { pallet_no: 'LyoC?1SlBm', item_desc: 'LyoC?1SlBm', qty: 432 },
          { pallet_no: 'Ts3X_]IWm=', item_desc: 'Ts3X_]IWm=', qty: 185 },
          { pallet_no: ';lb8^M`\\u3', item_desc: ';lb8^M`\\u3', qty: 566 },
          { pallet_no: 'u1`6]WnMK@', item_desc: 'U1`6]WnMK@', qty: 251 },
          { pallet_no: 'VmhI2P\\MGi', item_desc: 'VmhI2P\\MGi', qty: 125 },
          { pallet_no: 'HMopv7Gj]P', item_desc: 'HMopv7Gj]P', qty: 334 },
          { pallet_no: 'cf8kl?^D\\O', item_desc: 'Cf8kl?^D\\O', qty: 144 },
          { pallet_no: '2H8]96R8VW', item_desc: '2H8]96R8VW', qty: 247 },
          { pallet_no: '4ukV:f1d@N', item_desc: '4ukV:f1d@N', qty: 641 },
          { pallet_no: 'aZMqMASyp?', item_desc: 'AZMqMASyp?', qty: 98 },
          { pallet_no: 'd5QGMCMgry', item_desc: 'D5QGMCMgry', qty: 338 },
          { pallet_no: '=HbM\\jbC9e', item_desc: '=HbM\\jbC9e', qty: 233 },
          { pallet_no: 'FOOV>T]_b<', item_desc: 'FOOV>T]_b<', qty: 528 },
          { pallet_no: 'Atzr47R?7t', item_desc: 'Atzr47R?7t', qty: 648 },
          { pallet_no: 'e9ZsjLs@`M', item_desc: 'E9ZsjLs@`M', qty: 860 },
          { pallet_no: '`mvyEviJ1I', item_desc: '`mvyEviJ1I', qty: 584 },
          { pallet_no: 'Cj7yFJlI[O', item_desc: 'Cj7yFJlI[O', qty: 934 },
          { pallet_no: 'Yh=7z:bnUg', item_desc: 'Yh=7z:bnUg', qty: 702 },
          { pallet_no: 'p8rfv:87GT', item_desc: 'P8rfv:87GT', qty: 909 },
          { pallet_no: 'sa6fjhUePm', item_desc: 'Sa6fjhUePm', qty: 875 },
          { pallet_no: '_^DR@?TO?s', item_desc: '_^DR@?TO?s', qty: 105 },
          { pallet_no: '5njYcvQ`=k', item_desc: '5njYcvQ`=k', qty: 989 },
          { pallet_no: 'eVgsSEqGey', item_desc: 'EVgsSEqGey', qty: 60 },
          { pallet_no: 'q@8761@[<n', item_desc: 'Q@8761@[<n', qty: 319 },
          { pallet_no: '^=;ylvF]LX', item_desc: '^=;ylvF]LX', qty: 922 },
          { pallet_no: 'nw1q9kIOx_', item_desc: 'Nw1q9kIOx_', qty: 543 },
          { pallet_no: 'Kj3m6h4;=x', item_desc: 'Kj3m6h4;=x', qty: 475 },
          { pallet_no: 'HA1Z;dZzuf', item_desc: 'HA1Z;dZzuf', qty: 971 },
          { pallet_no: 'WzNwyuJ8p\\', item_desc: 'WzNwyuJ8p\\', qty: 157 },
          { pallet_no: ';3NMpRozir', item_desc: ';3NMpRozir', qty: 894 },
          { pallet_no: 'nLp;`NoeTl', item_desc: 'NLp;`NoeTl', qty: 624 },
          { pallet_no: '6:N::=F^Yh', item_desc: '6:N::=F^Yh', qty: 112 },
          { pallet_no: 'tVt\\_bdeN:', item_desc: 'TVt\\_bdeN:', qty: 458 },
          { pallet_no: '<:Zl2l>wnv', item_desc: '<:Zl2l>wnv', qty: 306 },
          { pallet_no: '2319^;sv]B', item_desc: '2319^;sv]B', qty: 695 },
          { pallet_no: '`P1fqm6QVB', item_desc: '`P1fqm6QVB', qty: 609 },
          { pallet_no: 'PV8PDw[wzJ', item_desc: 'PV8PDw[wzJ', qty: 494 },
          { pallet_no: 'vGjk1lF5V^', item_desc: 'VGjk1lF5V^', qty: 682 },
          { pallet_no: 'g]m:Y5A\\:J', item_desc: 'G]m:Y5A\\:J', qty: 956 },
          { pallet_no: ';91AOnODmk', item_desc: ';91AOnODmk', qty: 316 },
          { pallet_no: 'f`bPPfdlM7', item_desc: 'F`bPPfdlM7', qty: 703 },
          { pallet_no: 'si57VmByMq', item_desc: 'Si57VmByMq', qty: 608 },
          { pallet_no: 'LGiVTLau3D', item_desc: 'LGiVTLau3D', qty: 11 },
          { pallet_no: '5j?BL^j4q2', item_desc: '5j?BL^j4q2', qty: 739 },
          { pallet_no: 'N4p\\3^_D:B', item_desc: 'N4p\\3^_D:B', qty: 490 },
          { pallet_no: '`BUy@IhruK', item_desc: '`BUy@IhruK', qty: 652 },
          { pallet_no: '_@U47EA8y`', item_desc: '_@U47EA8y`', qty: 536 },
          { pallet_no: 'WepVwxW`E:', item_desc: 'WepVwxW`E:', qty: 968 },
          { pallet_no: 'bc`298QnWp', item_desc: 'Bc`298QnWp', qty: 248 },
          { pallet_no: 'jUOVzY>7P\\', item_desc: 'JUOVzY>7P\\', qty: 379 },
          { pallet_no: 'pky>K@UlKI', item_desc: 'Pky>K@UlKI', qty: 271 },
          { pallet_no: 'U629Y4B<O_', item_desc: 'U629Y4B<O_', qty: 176 },
          { pallet_no: 'bkZ:gR7Fkf', item_desc: 'BkZ:gR7Fkf', qty: 721 },
          { pallet_no: 'exhtcO:4h\\', item_desc: 'ExhtcO:4h\\', qty: 387 },
          { pallet_no: 'z<sfKNPHNc', item_desc: 'Z<sfKNPHNc', qty: 240 },
          { pallet_no: 'OnI@Zm7R2x', item_desc: 'OnI@Zm7R2x', qty: 772 },
          { pallet_no: 'k4Q87_i\\uO', item_desc: 'K4Q87_i\\uO', qty: 807 },
          { pallet_no: '@cVB>Gv:TV', item_desc: '@cVB>Gv:TV', qty: 76 },
          { pallet_no: 'JuHcW_gTc`', item_desc: 'JuHcW_gTc`', qty: 350 },
          { pallet_no: 'X<\\Q^HOR:p', item_desc: 'X<\\Q^HOR:p', qty: 632 },
          { pallet_no: ';rvSwbS2ov', item_desc: ';rvSwbS2ov', qty: 757 },
          { pallet_no: 'OPiXZ`4TTR', item_desc: 'OPiXZ`4TTR', qty: 755 },
          { pallet_no: 'e^FXZHpVMc', item_desc: 'E^FXZHpVMc', qty: 635 },
          { pallet_no: '3z1DAnH]gS', item_desc: '3z1DAnH]gS', qty: 431 },
          { pallet_no: '3gUW`nDKUn', item_desc: '3gUW`nDKUn', qty: 387 }
        ]
      }
    })

    context.body = html
  })
  */
})
