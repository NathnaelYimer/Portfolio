$dest = "app/assets/svg/skills"

# Create the directory if it doesn't exist
if (!(Test-Path $dest)) { New-Item -ItemType Directory -Path $dest }

$skills = @{
  "react" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  "nodejs" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  "vue" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  "angular" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  "django" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  "python" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  "java" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  "php" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  "mysql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  "postgresql" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  "mongodb" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  "docker" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  "amazonaws" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  "aws" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  "git" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  "figma" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  "tailwind" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  "typescript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  "javascript" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  "html" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  "css" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  "bootstrap" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
  "swift" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
  "go" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
  "ubuntu" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
  "flutter" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  "dart" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
  "jest" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
  "cypress" = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg"
}

foreach ($key in $skills.Keys) {
  $url = $skills[$key]
  $out = Join-Path $dest ($key + ".svg")
  Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing
  Write-Host "Downloaded $key.svg"
}

Write-Host "Done! Colored SVGs have been downloaded and replaced."