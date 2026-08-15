const configuredDeploymentUrl = process.env.DEPLOYMENT_URL || process.env.RAILWAY_PUBLIC_DOMAIN

if (!configuredDeploymentUrl) {
  throw new Error(`Missing Deployment URL for bot, for local this would be localhost:PORT`)
}
let deployment = ""
if (configuredDeploymentUrl.startsWith("localhost")) {
  deployment = "http://" + configuredDeploymentUrl
} else if (!configuredDeploymentUrl.startsWith("http")) {
  deployment = "https://" + configuredDeploymentUrl
} else {
  deployment = configuredDeploymentUrl
}
export const DEPLOYMENT_URL = deployment

let queueConcurrency = 1
if (process.env.QUEUE_CONCURRENCY) {
  queueConcurrency = Number(process.env.QUEUE_CONCURRENCY)
}
export const QUEUE_CONCURRENCY = queueConcurrency
