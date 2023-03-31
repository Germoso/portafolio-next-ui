import React from "react"

function Icon({ width }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} fill="none" viewBox="0 0 581 515">
            <path
                fill="#000"
                d="M406.314 382.478L291.981 415.73v-51.478l75.201-13.118c4.675-.6 5.478-3.572 5.464-6.511v-28.234c.014-1.757-.265-7.64-7.355-6.565l-73.31 8.533V104.142l114.333 33.259v245.077zm-99.899-52.502l53.045-6.169v13.269l-53.045-7.1zm-21.014 22.011l-70.606-12.622 33.508-3.825 74.377 9.943-37.279 6.504zm-6.605 63.679l-102.978-30.705v-39.142l102.981 18.412v51.435h-.003zM175.818 306.064V134.893l102.981-30.687v214.13l-102.981-12.272zM414.753 126.1L287.231 89.005c-.992-.293-2.073-.51-3.721.007l-116.168 34.616a6.614 6.614 0 00-4.71 6.336v181.964a6.604 6.604 0 005.82 6.565l55.14 6.575-55.115 6.297c-2.698.353-5.877 1.65-5.845 6.561v51.963a6.598 6.598 0 004.71 6.329l116.168 34.638c1.894.436 3.115.193 3.721.011l127.522-37.081a6.618 6.618 0 004.754-6.347v-255a6.606 6.606 0 00-4.754-6.339zm-60.032 57.328l4.739-.628v70.546h-4.739v-69.918zm-6.594 83.129h17.924c3.308-.149 6.645-2.007 6.595-6.607v-84.697c.046-1.329.353-5.415-5.464-6.515l-17.924-3.132c-1.945-.364-3.89.192-5.367 1.449-1.431 1.2-2.294 2.826-2.362 5.054v87.841a6.604 6.604 0 006.598 6.607zM554.279 286.987l.221 6.854 6.631-.213v-6.641h-6.852zm-28.433 56.918l-6.786.943.01.074.012.075 6.764-1.092zm3.083 22.287l-6.805.801.002.012.002.012 6.801-.825zm-18.156 69.261l-4.569-5.111-.022.02-.022.021 4.613 5.07zm-77.421 17.486H426.5v6.858h6.852v-6.858zm0-54.517v-6.857H426.5v6.857h6.852zm28.091-4.8l-4.845-4.849 4.845 4.849zm2.055-44.917l-6.817.682.005.048.005.048 6.807-.778zm5.824-72.347l-5.535-4.042-.036.049-.035.051 5.606 3.942zm27.748-16.115l1.248 6.743 5.603-1.039v-5.704h-6.851zm0-.686h6.851v-5.704l-5.603-1.039-1.248 6.743zm-27.748-16.115l-5.606 3.942.035.051.036.05 5.535-4.043zm-5.824-72.347l-6.807-.778-.005.048-.005.048 6.817.682zm-30.146-49.717H426.5v6.858h6.852v-6.858zm0-54.517v-6.858H426.5v6.858h6.852zm77.421 17.486l-4.613 5.07.022.02.022.02 4.569-5.11zm18.156 69.604l6.802.825.001-.011.002-.013-6.805-.801zm-3.083 21.944l-6.764-1.091-.012.074-.01.074 6.786.943zm3.768 50.403l-4.311 5.33.061.049.061.048 4.189-5.427zm24.665 6.172h6.852v-6.722l-6.715-.134-.137 6.856zm-.22 47.663c-11.269.364-20.896 2.704-27.831 8.004-7.297 5.576-10.659 13.678-10.659 23.195h13.703c0-6.028 1.948-9.755 5.27-12.294 3.685-2.814 9.987-4.875 19.958-5.197l-.441-13.708zm-38.49 31.199c0 5.816 1.221 17.156 3.491 33.516l13.572-1.887c-2.297-16.555-3.36-26.931-3.36-31.629h-13.703zm3.513 33.665a519.795 519.795 0 013.042 21.996l13.61-1.602a533.314 533.314 0 00-3.124-22.578l-13.528 2.184zm3.046 22.02c.888 7.341 1.32 13.8 1.32 19.404h13.703c0-6.282-.483-13.309-1.42-21.054l-13.603 1.65zm1.32 19.404c0 19.51-5.971 33.827-17.244 43.921l9.137 10.221c14.763-13.221 21.81-31.592 21.81-54.142h-13.703zm-17.288 43.962c-11.217 10.224-26.767 15.699-47.458 15.699v13.715c23.158 0 42.322-6.183 56.684-19.275l-9.226-10.139zm-47.458 15.699h-25.35v13.715h25.35v-13.715zm-18.499 6.857v-54.517H426.5v54.517h13.703zm-6.851-47.659h12.332v-13.715h-12.332v13.715zm12.332 0c8.053 0 15.522-1.723 20.603-6.809l-9.689-9.698c-1.313 1.314-4.349 2.792-10.914 2.792v13.715zm20.603-6.809c4.893-4.897 6.803-11.594 6.803-18.907h-13.703c0 5.031-1.287 7.706-2.789 9.209l9.689 9.698zm6.803-18.907c0-5.042-.971-15.748-2.785-31.637l-13.614 1.556c1.84 16.113 2.696 25.979 2.696 30.081h13.703zm-2.775-31.541c-2.063-20.658-3.049-33.671-3.049-39.434h-13.702c0 6.579 1.07 20.311 3.117 40.798l13.634-1.364zm-3.049-39.434c0-11.988 2.723-21.255 7.662-28.288l-11.212-7.885c-6.938 9.881-10.152 22.102-10.152 36.173h13.702zm7.59-28.188c4.935-6.77 12.486-11.381 23.462-13.415l-2.496-13.486c-13.689 2.537-24.637 8.67-32.035 18.816l11.069 8.085zm29.065-20.158v-.686h-13.702v.686h13.702zm-5.603-7.429c-10.976-2.034-18.527-6.645-23.462-13.414l-11.069 8.085c7.398 10.145 18.346 16.278 32.035 18.815l2.496-13.486zm-23.39-13.314c-4.939-7.034-7.662-16.301-7.662-28.288h-13.702c0 14.071 3.214 26.291 10.152 36.172l11.212-7.884zm-7.662-28.288c0-5.764.986-18.777 3.049-39.434l-13.634-1.365c-2.047 20.487-3.117 34.219-3.117 40.799h13.702zm3.039-39.338c1.813-15.876 2.785-26.478 2.785-31.295h-13.703c0 3.869-.855 13.612-2.696 29.738l13.614 1.557zm2.785-31.295c0-7.457-1.867-14.31-6.803-19.25l-9.689 9.698c1.459 1.461 2.789 4.209 2.789 9.552h13.703zm-6.803-19.25c-5.081-5.086-12.55-6.808-20.603-6.808v13.715c6.565 0 9.601 1.477 10.914 2.791l9.689-9.698zm-20.603-6.808h-12.332v13.715h12.332v-13.715zm-5.481 6.857V66.861H426.5v54.517h13.703zm-6.851-47.66h25.35V60.003h-25.35v13.715zm25.35 0c20.691 0 36.241 5.475 47.458 15.7l9.226-10.14c-14.362-13.092-33.526-19.275-56.684-19.275v13.715zm47.502 15.74c11.273 10.095 17.244 24.411 17.244 43.921h13.703c0-22.55-7.047-40.921-21.81-54.142l-9.137 10.22zm17.244 43.921c0 5.607-.432 12.187-1.324 19.771l13.61 1.602c.935-7.959 1.417-15.094 1.417-21.373h-13.703zm-1.32 19.747a559.098 559.098 0 01-3.046 21.678l13.528 2.183a572.126 572.126 0 003.121-22.211l-13.603-1.65zm-3.068 21.826c-2.273 16.376-3.491 27.819-3.491 33.86h13.703c0-4.932 1.065-15.433 3.36-31.973l-13.572-1.887zm-3.491 33.86c0 9.257 2.927 17.3 9.734 22.816l8.622-10.659c-2.785-2.257-4.653-5.871-4.653-12.157h-13.703zm9.856 22.913c6.8 5.259 16.86 7.364 28.717 7.601l.274-13.712c-10.98-.22-17.363-2.229-20.613-4.742l-8.378 10.853zm22.003.745v54.517h13.703V232.47h-13.703zM26.035 233.156l-.137-6.856-6.714.134v6.722h6.851zm24.323-6.172l-4.19-5.426-.06.047-.06.049 4.31 5.33zm4.11-50.403l6.787-.943-.01-.074-.012-.074-6.764 1.091zm-3.082-21.944l-6.805.801.002.012.001.012 6.802-.825zm17.813-69.604l-4.568-5.11-.022.02-.023.02 4.613 5.07zm77.764-17.486h6.851v-6.858h-6.851v6.858zm0 54.517v6.857h6.851v-6.857h-6.851zm-28.091 4.8l-4.844-4.849 4.844 4.849zm-2.055 44.917l6.817-.682-.005-.048-.005-.048-6.807.778zm-6.167 72.347l-5.534-4.043-.036.05-.035.05 5.605 3.943zm-27.405 16.115l-1.248-6.743-5.604 1.039v5.704h6.852zm0 .686h-6.852v5.704l5.604 1.039 1.248-6.743zm27.405 16.115l-5.605 3.942.035.051.036.049 5.534-4.042zm6.167 72.347l6.807.778.005-.048.005-.048-6.817-.682zm2.055 44.917l-4.844 4.849 4.844-4.849zm28.091 4.8h6.851v-6.858h-6.851v6.858zm0 54.517v6.858h6.851v-6.858h-6.851zm-77.764-17.487l-4.613 5.07.023.021.022.02 4.568-5.111zm-17.813-69.26l6.801.824.002-.011.001-.013-6.804-.8zm3.083-22.287l6.764 1.091.012-.074.01-.074-6.786-.943zm-28.434-56.918h-6.85v6.64l6.63.214.22-6.854zm.137-47.661c11.812-.237 21.867-2.326 28.497-7.698l-8.622-10.66c-2.962 2.4-9.122 4.425-20.148 4.646l.273 13.712zm28.375-7.602c7.08-5.475 10.199-13.543 10.199-22.913H51.043c0 6.174-1.905 9.764-4.874 12.061l8.378 10.852zm10.199-22.913c0-6.04-1.218-17.484-3.49-33.859l-13.573 1.887c2.295 16.54 3.36 27.04 3.36 31.972h13.703zm-3.513-34.007a558.336 558.336 0 01-3.046-21.678l-13.603 1.65a571.553 571.553 0 003.12 22.211l13.529-2.183zm-3.043-21.654c-.891-7.584-1.323-14.165-1.323-19.771H43.164c0 6.279.482 13.414 1.417 21.373l13.61-1.602zm-1.323-19.771c0-19.548 5.883-33.877 16.946-43.962l-9.227-10.14c-14.515 13.231-21.422 31.59-21.422 54.102h13.703zm16.9-43.921c11.465-10.267 27.161-15.74 47.846-15.74V60.69c-23.164 0-42.411 6.185-56.982 19.234l9.137 10.22zm47.846-15.74h25.35V60.69h-25.35v13.715zm18.499-6.857v54.517h13.702V67.547h-13.702zm6.851 47.659H134.63v13.715h12.333v-13.715zm-12.333 0c-8.052 0-15.521 1.723-20.602 6.809l9.689 9.698c1.313-1.314 4.349-2.792 10.913-2.792v-13.715zm-20.602 6.809c-4.936 4.94-6.803 11.792-6.803 19.25h13.703c0-5.343 1.329-8.091 2.789-9.552l-9.689-9.698zm-6.803 19.25c0 4.817.972 15.419 2.785 31.294l13.614-1.556c-1.841-16.127-2.696-25.869-2.696-29.738h-13.703zM110 172.463c2.063 20.658 3.048 33.671 3.048 39.434h13.703c0-6.579-1.07-20.311-3.117-40.798L110 172.463zm3.048 39.434c0 11.937-2.811 21.166-7.932 28.188l11.069 8.085c7.212-9.892 10.566-22.15 10.566-36.273h-13.703zm-8.003 28.288c-4.694 6.686-12.076 11.282-23.048 13.315l2.495 13.486c13.694-2.538 24.583-8.686 31.764-18.916l-11.211-7.885zm-28.652 20.058v.686h13.703v-.686H76.393zm5.604 7.429c10.972 2.033 18.354 6.629 23.048 13.314l11.211-7.884c-7.181-10.23-18.07-16.378-31.764-18.916l-2.495 13.486zm23.119 13.414c5.121 7.023 7.932 16.252 7.932 28.188h13.703c0-14.122-3.354-26.381-10.566-36.273l-11.069 8.085zm7.932 28.188c0 5.764-.985 18.777-3.048 39.434l13.634 1.365c2.047-20.487 3.117-34.219 3.117-40.799h-13.703zm-3.038 39.338c-1.814 15.89-2.785 26.596-2.785 31.638h13.703c0-4.102.856-13.968 2.696-30.081l-13.614-1.557zm-2.785 31.638c0 7.313 1.91 14.01 6.803 18.907l9.689-9.698c-1.502-1.504-2.789-4.179-2.789-9.209h-13.703zm6.803 18.907c5.081 5.086 12.55 6.808 20.602 6.808V392.25c-6.564 0-9.6-1.477-10.913-2.791l-9.689 9.698zm20.602 6.808h12.333V392.25H134.63v13.715zm5.482-6.857v54.517h13.702v-54.517h-13.702zm6.851 47.66h-25.35v13.715h25.35v-13.715zm-25.35 0c-20.685 0-36.38-5.473-47.845-15.74l-9.137 10.221c14.57 13.049 33.818 19.234 56.982 19.234v-13.715zm-47.8-15.699c-11.063-10.085-16.946-24.414-16.946-43.962H43.164c0 22.511 6.907 40.87 21.422 54.101l9.227-10.139zm-16.946-43.962c0-5.604.431-12.064 1.32-19.405l-13.603-1.649c-.938 7.745-1.42 14.772-1.42 21.054h13.703zm1.323-19.429a520.155 520.155 0 013.043-21.996l-13.528-2.183a533.652 533.652 0 00-3.124 22.578l13.61 1.601zm3.065-22.144c2.27-16.361 3.491-27.7 3.491-33.517H51.043c0 4.699-1.063 15.075-3.36 31.63l13.572 1.887zm3.491-33.517c0-9.517-3.362-17.619-10.659-23.194-6.936-5.3-16.562-7.64-27.83-8.004l-.442 13.708c9.97.322 16.274 2.383 19.957 5.197 3.323 2.539 5.271 6.266 5.271 12.293h13.703zm-31.86-24.344v-54.517H19.185v54.517h13.703z"
            ></path>
        </svg>
    )
}

export default Icon