import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const BrainSVG = (props) => (
  <Box
    as={motion.div}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.3 }}
    w={{ base: "220px", md: "360px", lg: "416px" }}
    h={{ base: "180px", md: "300px", lg: "333px" }}
    mx="auto"
    {...props}
  >
    <svg width="416" height="333" viewBox="0 0 416 333" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
      <path d="M87.8494 137.235L26.0873 106.588C25.493 106.293 24.7815 106.648 24.6598 107.3L16.0591 153.392C16.0207 153.598 16.0478 153.811 16.1367 154L36.3427 197.098C36.6509 197.755 37.535 197.876 38.0075 197.324L88.1643 138.781C88.5883 138.286 88.4332 137.525 87.8494 137.235Z" fill="#F5F5DC"/>
      <path d="M87.8494 137.235L26.0873 106.588C25.493 106.293 24.7815 106.648 24.6598 107.3L16.0591 153.392C16.0207 153.598 16.0478 153.811 16.1367 154L36.3427 197.098C36.6509 197.755 37.535 197.876 38.0075 197.324L88.1643 138.781C88.5883 138.286 88.4332 137.525 87.8494 137.235Z" fill="url(#paint0_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M25.752 106.995L25.8652 107.036L87.627 137.683C87.8823 137.809 87.9737 138.117 87.8506 138.357L87.7842 138.456L37.6279 196.999C37.4064 197.257 37.0035 197.221 36.8271 196.944L36.7949 196.886L16.5898 153.788C16.5565 153.717 16.5398 153.639 16.542 153.562L16.5508 153.484L25.1514 107.392C25.2048 107.106 25.484 106.935 25.752 106.995Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter1_ddd_102_2)">
      <path d="M88.5177 137.797L164.702 110.957C165.343 110.732 166.017 111.197 166.034 111.876L167.978 190.072C167.99 190.579 167.621 191.016 167.119 191.087L55.7913 206.958C55.6011 206.986 55.4072 206.957 55.2326 206.877L37.2125 198.596C36.6065 198.317 36.4378 197.535 36.8753 197.031L88.0951 138.084C88.2087 137.953 88.3543 137.854 88.5177 137.797Z" fill="#F5F5DC"/>
      <path d="M88.5177 137.797L164.702 110.957C165.343 110.732 166.017 111.197 166.034 111.876L167.978 190.072C167.99 190.579 167.621 191.016 167.119 191.087L55.7913 206.958C55.6011 206.986 55.4072 206.957 55.2326 206.877L37.2125 198.596C36.6065 198.317 36.4378 197.535 36.8753 197.031L88.0951 138.084C88.2087 137.953 88.3543 137.854 88.5177 137.797Z" fill="url(#paint1_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M164.868 111.429C165.168 111.323 165.484 111.521 165.529 111.825L165.534 111.888L167.479 190.085C167.484 190.307 167.343 190.501 167.14 190.57L167.049 190.592L55.7207 206.464C55.6495 206.474 55.5772 206.468 55.5088 206.448L55.4414 206.423L37.4209 198.142C37.1559 198.02 37.0582 197.704 37.1846 197.459L37.2529 197.359L88.4727 138.412C88.5152 138.363 88.5666 138.323 88.624 138.294L88.6836 138.269L164.868 111.429Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter2_ddd_102_2)">
      <path d="M165.603 110.39L104.531 34.8291C104.168 34.38 103.501 34.3308 103.076 34.7217L25.571 106.015C25.0547 106.49 25.1751 107.335 25.8036 107.647L87.6256 138.314C87.8652 138.433 88.1423 138.451 88.3952 138.364L165.15 111.964C165.806 111.739 166.039 110.93 165.603 110.39Z" fill="#F5F5DC"/>
      <path d="M165.603 110.39L104.531 34.8291C104.168 34.38 103.501 34.3308 103.076 34.7217L25.571 106.015C25.0547 106.49 25.1751 107.335 25.8036 107.647L87.6256 138.314C87.8652 138.433 88.1423 138.451 88.3952 138.364L165.15 111.964C165.806 111.739 166.039 110.93 165.603 110.39Z" fill="url(#paint2_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M103.415 35.0898C103.601 34.919 103.879 34.916 104.067 35.0684L104.142 35.1436L165.214 110.704C165.418 110.957 165.329 111.328 165.047 111.467L164.987 111.491L88.2324 137.892C88.1376 137.924 88.0358 137.927 87.9404 137.901L87.8477 137.866L26.0254 107.199C25.7309 107.053 25.6602 106.672 25.8652 106.43L25.9092 106.383L103.415 35.0898Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter3_ddd_102_2)">
      <path d="M229.434 8H180.188C179.364 8 178.894 8.9417 179.389 9.60081L266.892 126.025C267.369 126.66 268.359 126.513 268.631 125.767L305.572 24.2734C305.791 23.6706 305.394 23.0201 304.758 22.9393L250.172 16.0082C250.09 15.9978 250.01 15.9774 249.933 15.9474L229.798 8.06875C229.682 8.02332 229.558 8 229.434 8Z" fill="#F5F5DC"/>
      <path d="M229.434 8H180.188C179.364 8 178.894 8.9417 179.389 9.60081L266.892 126.025C267.369 126.66 268.359 126.513 268.631 125.767L305.572 24.2734C305.791 23.6706 305.394 23.0201 304.758 22.9393L250.172 16.0082C250.09 15.9978 250.01 15.9774 249.933 15.9474L229.798 8.06875C229.682 8.02332 229.558 8 229.434 8Z" fill="url(#paint3_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M180.189 8.5H229.434C229.465 8.50001 229.496 8.50301 229.527 8.50879L229.615 8.53418L249.751 16.4131C249.809 16.4356 249.867 16.4545 249.927 16.4697L250.109 16.5039L304.696 23.4355C304.974 23.4711 305.161 23.7246 305.129 23.9893L305.102 24.1025L268.161 125.596C268.034 125.945 267.591 126.032 267.339 125.78L267.291 125.725L179.788 9.30078C179.541 8.97123 179.776 8.5 180.189 8.5Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter4_ddd_102_2)">
      <path d="M179.998 8.99685L267.043 125.057C267.578 125.771 266.98 126.776 266.097 126.646L166.962 112.045C166.427 111.966 166.051 111.475 166.115 110.937L178.205 9.47853C178.311 8.58269 179.456 8.27511 179.998 8.99685Z" fill="#F5F5DC"/>
      <path d="M179.998 8.99685L267.043 125.057C267.578 125.771 266.98 126.776 266.097 126.646L166.962 112.045C166.427 111.966 166.051 111.475 166.115 110.937L178.205 9.47853C178.311 8.58269 179.456 8.27511 179.998 8.99685Z" fill="url(#paint4_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M178.701 9.53809C178.751 9.11801 179.258 8.95614 179.544 9.23535L179.598 9.29688L266.643 125.356C266.894 125.691 266.647 126.154 266.251 126.157L266.17 126.151L167.035 111.55C166.801 111.515 166.628 111.323 166.609 111.096L166.611 110.996L178.701 9.53809Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter5_ddd_102_2)">
      <path d="M167.438 191.788L194.43 209.523C194.847 209.796 195.401 209.722 195.73 209.347L267.788 127.379C268.311 126.784 267.968 125.846 267.184 125.729L166.176 110.675C165.562 110.584 165.014 111.068 165.029 111.689L166.987 190.976C166.995 191.304 167.164 191.607 167.438 191.788Z" fill="#F5F5DC"/>
      <path d="M167.438 191.788L194.43 209.523C194.847 209.796 195.401 209.722 195.73 209.347L267.788 127.379C268.311 126.784 267.968 125.846 267.184 125.729L166.176 110.675C165.562 110.584 165.014 111.068 165.029 111.689L166.987 190.976C166.995 191.304 167.164 191.607 167.438 191.788Z" fill="url(#paint5_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M166.103 111.17L267.11 126.224C267.478 126.278 267.652 126.694 267.456 126.991L267.412 127.049L195.354 209.018C195.211 209.181 194.981 209.23 194.786 209.148L194.705 209.104L167.712 191.37C167.609 191.303 167.537 191.2 167.505 191.084L167.487 190.964L165.529 111.677C165.523 111.405 165.731 111.186 165.989 111.166L166.103 111.17Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter6_ddd_102_2)">
      <path d="M177.974 8.5422L104.83 34.5275C104.18 34.7583 103.954 35.5618 104.387 36.0981L165.019 111.167C165.574 111.853 166.681 111.537 166.79 110.661L179.301 9.60737C179.392 8.86924 178.675 8.29321 177.974 8.5422Z" fill="#F5F5DC"/>
      <path d="M177.974 8.5422L104.83 34.5275C104.18 34.7583 103.954 35.5618 104.387 36.0981L165.019 111.167C165.574 111.853 166.681 111.537 166.79 110.661L179.301 9.60737C179.392 8.86924 178.675 8.29321 177.974 8.5422Z" fill="url(#paint6_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M178.142 9.01367C178.47 8.89722 178.805 9.14246 178.809 9.47754L178.805 9.5459L166.293 110.6C166.242 111.01 165.752 111.175 165.463 110.911L165.408 110.853L104.776 35.7842C104.573 35.5327 104.66 35.1635 104.939 35.0234L104.997 34.999L178.142 9.01367Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter7_ddd_102_2)">
      <path d="M194.34 209.053L267.095 127.02C267.544 126.515 268.354 126.59 268.701 127.169L307.628 192.092C307.85 192.462 307.81 192.933 307.528 193.259L280.609 224.49C280.501 224.615 280.364 224.711 280.21 224.77L246.205 237.836C245.934 237.94 245.63 237.921 245.374 237.784L194.616 210.598C194.047 210.293 193.912 209.536 194.34 209.053Z" fill="#F5F5DC"/>
      <path d="M194.34 209.053L267.095 127.02C267.544 126.515 268.354 126.59 268.701 127.169L307.628 192.092C307.85 192.462 307.81 192.933 307.528 193.259L280.609 224.49C280.501 224.615 280.364 224.711 280.21 224.77L246.205 237.836C245.934 237.94 245.63 237.921 245.374 237.784L194.616 210.598C194.047 210.293 193.912 209.536 194.34 209.053Z" fill="url(#paint7_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M267.47 127.352C267.666 127.131 268 127.132 268.197 127.33L268.272 127.427L307.199 192.35C307.296 192.511 307.293 192.711 307.196 192.868L307.149 192.933L280.229 224.163C280.189 224.21 280.141 224.248 280.087 224.277L280.03 224.304L246.025 237.369C245.924 237.408 245.813 237.413 245.71 237.384L245.61 237.343L194.853 210.157C194.603 210.024 194.52 209.717 194.646 209.48L194.714 209.385L267.47 127.352Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter8_ddd_102_2)">
      <path d="M398.308 114.16L269.086 126.35C268.352 126.42 267.943 127.232 268.324 127.863L307.337 192.385C307.559 192.753 307.991 192.937 308.41 192.844L371.107 178.908C371.419 178.839 371.678 178.625 371.806 178.333L399.318 115.557C399.624 114.858 399.067 114.088 398.308 114.16Z" fill="#F5F5DC"/>
      <path d="M398.308 114.16L269.086 126.35C268.352 126.42 267.943 127.232 268.324 127.863L307.337 192.385C307.559 192.753 307.991 192.937 308.41 192.844L371.107 178.908C371.419 178.839 371.678 178.625 371.806 178.333L399.318 115.557C399.624 114.858 399.067 114.088 398.308 114.16Z" fill="url(#paint8_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M398.354 114.657C398.71 114.624 398.978 114.96 398.884 115.29L398.86 115.355L371.349 178.133C371.301 178.242 371.215 178.329 371.11 178.381L370.999 178.42L308.301 192.356C308.118 192.397 307.93 192.331 307.812 192.191L307.765 192.127L268.752 127.604C268.573 127.309 268.742 126.934 269.066 126.859L269.133 126.849L398.354 114.657Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter9_ddd_102_2)">
      <path d="M332.798 121.608L268.563 127.36C267.835 127.425 267.285 126.712 267.534 126.024L304.445 23.9197C304.775 23.0062 306.082 23.0524 306.347 23.9869L333.671 120.339C333.842 120.942 333.422 121.552 332.798 121.608Z" fill="#F5F5DC"/>
      <path d="M332.798 121.608L268.563 127.36C267.835 127.425 267.285 126.712 267.534 126.024L304.445 23.9197C304.775 23.0062 306.082 23.0524 306.347 23.9869L333.671 120.339C333.842 120.942 333.422 121.552 332.798 121.608Z" fill="url(#paint9_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M304.915 24.0898C305.07 23.6617 305.653 23.6552 305.835 24.041L305.866 24.123L333.189 120.476C333.264 120.739 333.113 121.006 332.865 121.087L332.753 121.109L268.519 126.862C268.177 126.893 267.915 126.581 267.985 126.259L268.004 126.194L304.915 24.0898Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter10_ddd_102_2)">
      <path d="M397.763 115.182L333.694 121.912C333.209 121.963 332.758 121.656 332.627 121.187L305.699 24.9985C305.453 24.1173 306.421 23.3951 307.195 23.8828L353.899 53.2994C354.004 53.3659 354.096 53.4515 354.17 53.5519L398.463 113.594C398.922 114.216 398.532 115.102 397.763 115.182Z" fill="#F5F5DC"/>
      <path d="M397.763 115.182L333.694 121.912C333.209 121.963 332.758 121.656 332.627 121.187L305.699 24.9985C305.453 24.1173 306.421 23.3951 307.195 23.8828L353.899 53.2994C354.004 53.3659 354.096 53.4515 354.17 53.5519L398.463 113.594C398.922 114.216 398.532 115.102 397.763 115.182Z" fill="url(#paint10_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M306.181 24.8633C306.065 24.4503 306.484 24.1077 306.855 24.2676L306.929 24.3057L353.632 53.7227C353.658 53.7393 353.683 53.7581 353.706 53.7793L353.768 53.8486L398.061 113.892C398.275 114.183 398.118 114.59 397.78 114.673L397.711 114.686L333.642 121.414C333.429 121.436 333.23 121.322 333.14 121.136L333.108 121.052L306.181 24.8633Z" stroke="#0D273E" stroke-linejoin="round"/>
      </g>
      <g filter="url(#filter11_ddd_102_2)">
      <path d="M187.024 239.985L108.808 308.539C108.038 309.214 106.872 308.434 107.202 307.465L122.845 261.456C122.943 261.168 123.167 260.94 123.453 260.837L186.026 238.292C187.065 237.918 187.855 239.257 187.024 239.985Z" fill="#F5F5DC"/>
      <path d="M187.024 239.985L108.808 308.539C108.038 309.214 106.872 308.434 107.202 307.465L122.845 261.456C122.943 261.168 123.167 260.94 123.453 260.837L186.026 238.292C187.065 237.918 187.855 239.257 187.024 239.985Z" fill="url(#paint11_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M186.195 238.763C186.682 238.587 187.059 239.164 186.763 239.537L186.694 239.609L108.479 308.163C108.118 308.479 107.583 308.156 107.653 307.716L107.675 307.626L123.318 261.616C123.355 261.508 123.428 261.418 123.521 261.357L123.622 261.308L186.195 238.763Z" stroke="#0D273E"/>
      </g>
      <g filter="url(#filter12_ddd_102_2)">
      <path d="M55 206.962V250.494C55 250.987 55.3589 251.406 55.8458 251.482L122.975 261.961C123.141 261.986 123.311 261.97 123.469 261.913L186.511 239.176C186.818 239.066 187.051 238.813 187.137 238.499L194.812 210.327C194.925 209.914 194.762 209.476 194.409 209.236L167.848 191.214C167.644 191.076 167.397 191.018 167.153 191.051L55.8671 205.971C55.3706 206.038 55 206.461 55 206.962Z" fill="#F5F5DC"/>
      <path d="M55 206.962V250.494C55 250.987 55.3589 251.406 55.8458 251.482L122.975 261.961C123.141 261.986 123.311 261.97 123.469 261.913L186.511 239.176C186.818 239.066 187.051 238.813 187.137 238.499L194.812 210.327C194.925 209.914 194.762 209.476 194.409 209.236L167.848 191.214C167.644 191.076 167.397 191.018 167.153 191.051L55.8671 205.971C55.3706 206.038 55 206.461 55 206.962Z" fill="url(#paint12_linear_102_2)" fill-opacity="0.7" style="mix-blend-mode:overlay"/>
      <path d="M167.22 191.546C167.311 191.534 167.404 191.547 167.487 191.584L167.566 191.628L194.128 209.65C194.283 209.755 194.364 209.936 194.345 210.117L194.33 210.195L186.654 238.367C186.622 238.485 186.548 238.585 186.449 238.651L186.342 238.706L123.299 261.442C123.24 261.464 123.177 261.475 123.114 261.473L123.052 261.467L55.9229 250.988C55.6795 250.95 55.5001 250.74 55.5 250.494V206.962C55.5002 206.743 55.6421 206.553 55.8438 206.487L55.9336 206.467L167.22 191.546Z" stroke="#0D273E"/>
      </g>
      <defs>
      <filter id="filter0_ddd_102_2" x="0.0420532" y="98.4832" width="104.363" height="123.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter1_ddd_102_2" x="20.6299" y="102.9" width="163.348" height="128.069" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter2_ddd_102_2" x="9.24786" y="26.4578" width="172.578" height="135.961" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter3_ddd_102_2" x="163.187" y="0" width="158.446" height="150.425" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter4_ddd_102_2" x="150.108" y="0.595703" width="133.137" height="150.062" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter5_ddd_102_2" x="149.029" y="102.664" width="135.009" height="131.023" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter6_ddd_102_2" x="88.1644" y="0.483398" width="107.144" height="135.056" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter7_ddd_102_2" x="178.088" y="118.684" width="145.683" height="143.219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter8_ddd_102_2" x="252.179" y="106.155" width="163.224" height="110.713" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter9_ddd_102_2" x="251.473" y="15.2598" width="98.2362" height="136.104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter10_ddd_102_2" x="289.66" y="15.7253" width="124.999" height="130.192" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter11_ddd_102_2" x="91.1445" y="230.227" width="112.227" height="102.565" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <filter id="filter12_ddd_102_2" x="39" y="183.042" width="171.847" height="102.931" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_102_2" result="effect2_dropShadow_102_2"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_102_2"/>
      <feOffset/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_102_2" result="effect3_dropShadow_102_2"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_102_2" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_102_2" x1="52.5" y1="95.6448" x2="52.5" y2="203.59" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint1_linear_102_2" x1="102" y1="103.531" x2="102" y2="212.662" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint2_linear_102_2" x1="95" y1="22.2793" x2="95" y2="144.459" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint3_linear_102_2" x1="242.5" y1="-5.54138" x2="242.5" y2="135.617" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint4_linear_102_2" x1="217" y1="-5.54138" x2="217" y2="135.617" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint5_linear_102_2" x1="216" y1="101.962" x2="216" y2="217.024" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint6_linear_102_2" x1="141.5" y1="-3.83448" x2="141.5" y2="119.531" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint7_linear_102_2" x1="252" y1="114.369" x2="252" y2="246.038" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint8_linear_102_2" x1="333" y1="105.01" x2="333" y2="198.721" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint9_linear_102_2" x1="299.5" y1="13.3931" x2="299.5" y2="134.386" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint10_linear_102_2" x1="354.5" y1="12.8483" x2="354.5" y2="129.096" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint11_linear_102_2" x1="146.5" y1="229.693" x2="146.5" y2="316.286" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F5C0C0" stop-opacity="0.37"/>
      <stop offset="1" stop-color="#F5C0C0" stop-opacity="0.14"/>
      </linearGradient>
      <linearGradient id="paint12_linear_102_2" x1="125" y1="182.921" x2="125" y2="267.141" gradientUnits="userSpaceOnUse">
      <stop offset="1" stop-color="#FB923C" stop-opacity="0.37"/>
      </linearGradient>
      </defs>
    </svg>
  </Box>
);

export default function HeroSection() {
  // To rearrange order for mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="#F5F5DC"
      px={{ base: 4, md: 20, xl: 32 }}
      py={{ base: 8, md: 16 }}
      minH={{ base: "auto", md: "647px" }}
      w="100%"
      fontFamily="Roboto, sans-serif"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 10, md: 24 }}
        alignItems="center"
        maxW="1440px"
        mx="auto"
      >
        <Box
          order={{ base: 0, md: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <BrainSVG />
        </Box>

        {/* Text Content */}
        <Stack
          align="flex-start"
          spacing={6}
          maxW={{ base: "100%", md: "600px" }}
          order={{ base: 1, md: 1 }}
          pt={{ base: 4, md: 0 }}
        >
          <Text
            fontFamily="'Belleza', sans-serif"
            fontSize={{ base: "xl", md: "2xl" }}
            color="#0F172A"
            fontWeight="400"
            letterSpacing="0.5px"
            mb={2}
          >
            Welcome to{" "}
            <span style={{ fontWeight: 700, fontFamily: "inherit" }}>
              Coach for Mind
            </span>
          </Text>

          <Heading
            fontFamily="Roboto, sans-serif"
            fontSize={{ base: "2.2rem", md: "4.5rem" }}
            fontWeight="800"
            color="#0F172A"
            lineHeight="1.1"
            mb={2}
          >
            You deserve{" "}
            <Box as="span" display="block" position="relative" w="fit-content">
              Happy & Healthy{" "}
              <Box
                as="span"
                position="relative"
                zIndex={1}
                display="inline-block"
                pb={1}
              >
                <Box as="span" position="relative" fontWeight="extrabold">
                  Mind
                  <Box
                    as="span"
                    position="absolute"
                    left={0}
                    right={0}
                    bottom="-4px"
                    height="9px"
                    bg="#FFE066"
                    borderRadius="6px"
                    zIndex={-1}
                    w="100%"
                    style={{
                      filter:
                        "blur(1.5px) drop-shadow(0 1px 8px #fff6)",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Heading>

          <Text
            color="#0F172A"
            fontFamily="Roboto, sans-serif"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="500"
            lineHeight="160%"
            maxW="500px"
            mb={2}
          >
            Come & find a safe space for self-expression, discovery, and happiness.
          </Text>

          <Button
            as="a"
            href="tel:1234567890"
            px={8}
            py={5}
            borderRadius="8px"
            border="2px solid #0D273E"
            bg="#0D273E"
            color="#fff"
            fontWeight="bold"
            fontSize="lg"
            _hover={{
              bg: "#123456",
              color: "#FFE066",
              borderColor: "#FFE066",
            }}
            transition="all 0.2s"
            mt={4}
            boxShadow="0 2px 12px #0D273E22"
          >
            Call Now
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
}