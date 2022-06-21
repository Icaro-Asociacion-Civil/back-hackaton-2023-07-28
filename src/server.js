"use strict"

import express from "express"
import morgan from "morgan"
import serviceMock from "./serviceMock"

const app = express()
const PORT = 41003

app.disable("etag")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/fake-service", serviceMock)

app.listen(PORT, () => console.log("Listening in port", PORT))
