import defaultIcon from '../app/assets/svg/skills/default.svg';
import adobeXd from '../app/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../app/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../app/assets/svg/skills/after-effects.svg';
import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import blender from '../app/assets/svg/skills/blender.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import bulma from '../app/assets/svg/skills/bulma.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import capacitorjs from '../app/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../app/assets/svg/skills/coffeescript.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import deno from '../app/assets/svg/skills/deno.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import elasticsearch from '../app/assets/svg/skills/elasticsearch.svg';
import fastapi from '../app/assets/svg/skills/fastapi.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import git from '../app/assets/svg/skills/git.svg';
import githubactions from '../app/assets/svg/skills/githubactions.svg';
import go from '../app/assets/svg/skills/go.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import html from '../app/assets/svg/skills/html.svg';
import jest from '../app/assets/svg/skills/jest.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import julia from '../app/assets/svg/skills/julia.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import lightroom from '../app/assets/svg/skills/lightroom.svg';
import markdown from '../app/assets/svg/skills/markdown.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import memsql from '../app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongodb from '../app/assets/svg/skills/mongodb.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nestjs from '../app/assets/svg/skills/nestjs.svg';
import nextjs from '../app/assets/svg/skills/nextjs.svg';
import nodejs from '../app/assets/svg/skills/nodejs.svg';
import nuxtjs from '../app/assets/svg/skills/nuxtjs.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import picsart from '../app/assets/svg/skills/picsart.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import premierepro from '../app/assets/svg/skills/premierepro.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import ruby from '../app/assets/svg/skills/ruby.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import sketch from '../app/assets/svg/skills/sketch.svg';
import strapi from '../app/assets/svg/skills/strapi.svg';
import svelte from '../app/assets/svg/skills/svelte.svg';
import swift from '../app/assets/svg/skills/swift.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import ubuntu from '../app/assets/svg/skills/ubuntu.svg';
import unity from '../app/assets/svg/skills/unity.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import vue from '../app/assets/svg/skills/vue.svg';
import vuetifyjs from '../app/assets/svg/skills/vuetifyjs.svg';
import webix from '../app/assets/svg/skills/webix.svg';
import wolframalpha from '../app/assets/svg/skills/wolframalpha.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';

import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikitlearn.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg'
import kubernetes from '../app/assets/svg/skills/kubernetes.svg'
import linux from '../app/assets/svg/skills/linux.svg'
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg'
import cypress from '../app/assets/svg/skills/cypress.svg'
import postman from '../app/assets/svg/skills/postman.svg'



export const skillsImage = (skill) => {
  if (!skill) return defaultIcon;
  const normalized = skill.toLowerCase().replace(/\s|\.|-/g, '');
  switch (normalized) {
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'angular':
      return angular;
    case 'aws':
      return aws;
    case 'bootstrap':
      return bootstrap;
    case 'cypress':
      return cypress;
    case 'dart':
      return dart;
    case 'django':
      return django;
    case 'docker':
      return docker;
    case 'elasticsearch':
      return elasticsearch;
    case 'express':
      return nodejs;
    case 'fastapi':
      return fastapi;
    case 'figma':
      return figma;
    case 'firebase':
      return firebase;
    case 'flutter':
      return flutter;
    case 'git':
      return git;
    case 'githubactions':
      return githubactions;
    case 'go':
      return go;
    case 'graphql':
      return graphql;
    case 'html':
      return html;
    case 'jest':
      return jest;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'jwt':
      return defaultIcon;
    case 'kubernetes':
      return kubernetes;
    case 'materialui':
      return materialui;
    case 'mongodb':
      return mongodb;
    case 'mysql':
      return mysql;
    case 'nestjs':
      return nestjs;
    case 'nextjs':
      return nextjs;
    case 'nodejs':
      return nodejs;
    case 'nuxtjs':
      return nuxtjs;
    case 'oauth':
      return defaultIcon;
    case 'opencv':
      return opencv;
    case 'php':
      return php;
    case 'postgresql':
      return postgresql;
    case 'postman':
      return postman;
    case 'prisma':
      return prisma;
    case 'pwa':
      return defaultIcon;
    case 'pytest':
      return defaultIcon;
    case 'python':
      return python;
    case 'react':
      return react;
    case 'reactnative':
      return react;
    case 'rest':
      return defaultIcon;
    case 'scikitlearn':
      return scikitlearn;
    case 'seo':
      return defaultIcon;
    case 'strapi':
      return strapi;
    case 'swift':
      return swift;
    case 'tailwind':
      return tailwind;
    case 'tensorflow':
      return tensorflow;
    case 'typescript':
      return typescript;
    case 'ubuntu':
      return ubuntu;
    case 'vue':
      return vue;
    case 'wordpress':
      return wordpress;
    default:
      return defaultIcon;
  }
}
