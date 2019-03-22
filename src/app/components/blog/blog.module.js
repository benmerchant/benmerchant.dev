/*
 * Title: blog.module.js
 *
 *
 * Description: Blog module. Gathers all components for blog feature.
 *
 * Author: Ben Merchant
*/


import BlogPostService from './psuedoPosts/index.js';

export const BLOG_MODULE = angular.module('blog',[]);


BLOG_MODULE.service('BlogService', BlogService);
