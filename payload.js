export class Payload {

    constructor() {
        this.json = {
            deviceType: "",
            deviceId: "",
            timestamp: "",
            payload: {
                id: "",
                tipo: "",
                value: "",
                raw: "",
                trama: ""
            }
        }
    }


    /* GETTERS */
    getDeviceId = () => this.json.deviceType
    getDeviceId = () => this.json.deviceId
    getTimestamp = () => this.json.timestamp
    getPayloadID = () => this.json.payload.id
    getPayloadTipo = () => this.json.payload.tipo
    getPayloadValue = () => this.json.payload.value
    getPayloadRaw = () => this.json.payload.raw
    getPayloadTrama = () => this.json.payload.trama

    /* SETTERS */
    setDeviceId = (deviceType) => this.json.deviceType = deviceType
    setDeviceId = (deviceId) => this.json.deviceId = deviceId
    setTimestamp = (timestamp) => this.json.timestamp = timestamp
    setPayloadID = (id) => this.json.payload.id = id
    setPayloadTipo = (tipo) => this.json.payload.tipo = tipo
    setPayloadValue = (value) => this.json.payload.value = value
    setPayloadRaw = (raw) => this.json.payload.raw = raw
    setPayloadTrama = (trama) => this.json.payload.trama = trama

}