const Icon = ({ icon }) => {
  const icons = {
    flexTool: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-bring-to-front"
      >
        <rect x="8" y="8" width="8" height="8" rx="2" />
        <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
        <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
      </svg>
    ),
    colorAlpha: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-blend"
      >
        <circle cx="9" cy="9" r="7" />
        <circle cx="15" cy="15" r="7" />
      </svg>
    ),
    uuidGenerator: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-hash"
      >
        <line x1="4" x2="20" y1="9" y2="9" />
        <line x1="4" x2="20" y1="15" y2="15" />
        <line x1="10" x2="8" y1="3" y2="21" />
        <line x1="16" x2="14" y1="3" y2="21" />
      </svg>
    ),
    settings: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-cog"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m11 13.73-4 6.93" />
      </svg>
    ),
    toolbox: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-package"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    snippits: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-scissors"
      >
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
      </svg>
    ),
    react: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0468 19.8176C9.9605 21.6015 7.89054 22.3291 6.50001 21.5262C5.11988 20.7294 4.71068 18.5992 5.19524 15.9287C2.64025 15.0131 1 13.5936 1 12C1 10.4185 2.61538 9.00844 5.13708 8.09223C4.63811 5.45607 5.02632 3.34731 6.38639 2.54022C7.7672 1.72081 9.84572 2.42351 11.9532 4.18232C14.0395 2.39839 16.1095 1.67085 17.5 2.47367C18.8802 3.2705 19.2894 5.40076 18.8048 8.07125C21.3598 8.98684 23 10.4063 23 12C23 13.5815 21.3846 14.9915 18.863 15.9077C19.3619 18.5439 18.9737 20.6526 17.6137 21.4597C16.2328 22.2792 14.1543 21.5764 12.0468 19.8176ZM7.50001 19.7942C7.40115 19.7371 6.84224 19.1914 7.03967 17.1619C7.0609 16.9436 7.0906 16.7175 7.12882 16.4842C7.79794 16.6347 8.50557 16.7551 9.24319 16.8417C9.68037 17.414 10.1306 17.9457 10.5868 18.4321C10.3922 18.5928 10.1995 18.7411 10.0098 18.8767C8.35089 20.0624 7.59887 19.8513 7.50001 19.7942ZM16.8712 7.51572C16.9094 7.28248 16.9391 7.05628 16.9604 6.83798C17.1578 4.80848 16.5989 4.2628 16.5 4.20572C16.4012 4.14864 15.6491 3.93745 13.9902 5.12318C13.8005 5.25878 13.6079 5.40713 13.4132 5.56779C13.8694 6.05419 14.3197 6.58599 14.7569 7.15831C15.4945 7.24483 16.2021 7.36526 16.8712 7.51572ZM10.5099 5.58517C10.3134 5.42687 10.1189 5.28084 9.92763 5.14753C8.25466 3.98174 7.50522 4.20192 7.40705 4.26017C7.30888 4.31843 6.75654 4.87076 6.97824 6.89776C7.00056 7.10177 7.03036 7.31261 7.06771 7.52957C7.74393 7.37512 8.46002 7.25144 9.2071 7.16256C9.63063 6.5961 10.0671 6.06873 10.5099 5.58517ZM8.60047 12.0203C8.84008 11.5189 9.10711 11.0106 9.40194 10.5C9.69276 9.99622 9.99515 9.51704 10.3051 9.06433C10.8521 9.02226 11.4183 8.99998 12 8.99998C12.5738 8.99998 13.1324 9.02166 13.6726 9.06262C13.9834 9.5062 14.2872 9.97558 14.58 10.469C14.8809 10.9761 15.154 11.4811 15.3995 11.9796C15.1599 12.481 14.8929 12.9893 14.5981 13.5C14.3072 14.0037 14.0049 14.4829 13.6949 14.9356C13.1479 14.9777 12.5817 15 12 15C11.4263 15 10.8676 14.9783 10.3275 14.9373C10.0166 14.4938 9.71289 14.0244 9.42009 13.531C9.11917 13.0239 8.84607 12.5188 8.60047 12.0203ZM6.3999 12.0335C6.10145 11.357 5.8473 10.6894 5.63846 10.0397C5.43281 10.1183 5.23627 10.2002 5.04943 10.2852C3.19311 11.129 3 11.8858 3 12C3 12.1141 3.19311 12.871 5.04943 13.7148C5.2491 13.8055 5.45983 13.8929 5.68093 13.9764C5.87851 13.3431 6.11844 12.6926 6.3999 12.0335ZM14.7929 16.8374C15.54 16.7485 16.2561 16.6248 16.9323 16.4704C16.9697 16.6873 16.9995 16.8982 17.0218 17.1022C17.2435 19.1292 16.6912 19.6815 16.593 19.7398C16.4948 19.798 15.7454 20.0182 14.0724 18.8524C13.8811 18.7191 13.6867 18.5731 13.4901 18.4148C13.9329 17.9312 14.3694 17.4038 14.7929 16.8374ZM17.6001 11.9664C17.8986 12.6429 18.1527 13.3106 18.3616 13.9603C18.5672 13.8817 18.7637 13.7997 18.9506 13.7148C20.8069 12.871 21 12.1141 21 12C21 11.8858 20.8069 11.129 18.9506 10.2852C18.7509 10.1944 18.5402 10.107 18.3191 10.0235C18.1215 10.6568 17.8816 11.3073 17.6001 11.9664Z"
          fill="currentColor"
        />
      </svg>
    ),
    css: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 2L4.6381 20.0007L11.989 22L19.3601 19.9979L21 2H3ZM6.75535 10.1481L6.95729 12.3558H14.767L14.5054 15.219L11.9922 15.8838L11.9901 15.8844L9.48045 15.2204L9.32005 13.4597H7.05793L7.37367 16.9261L11.9896 18.1816L12 18.1784L16.6118 16.9261L17.1751 10.7409L17.2302 10.1481L17.637 5.67963H6.3495L6.55436 7.88736H15.1674L14.9623 10.1481H6.75535Z"
          fill="currentColor"
        />
      </svg>
    ),
    copyToClipboard: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-copy"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    ),
    refresh: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-refresh-cw"
      >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    ),
    javascript: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 2H22V22H2V2ZM17.2889 18.7663C16.3619 18.7663 15.8378 18.2829 15.4349 17.6251L13.9076 18.5124C14.4594 19.6025 15.587 20.4343 17.3324 20.4343C19.1175 20.4343 20.4467 19.5073 20.4467 17.8152C20.4467 16.2457 19.5451 15.5476 17.9483 14.8629L17.4784 14.6616C16.6721 14.3124 16.3229 14.0841 16.3229 13.5203C16.3229 13.0641 16.6717 12.7149 17.2222 12.7149C17.7619 12.7149 18.1095 12.9425 18.4317 13.5203L19.8952 12.5806C19.2762 11.4917 18.4171 11.0759 17.2222 11.0759C15.5438 11.0759 14.4698 12.1489 14.4698 13.5584C14.4698 15.0886 15.3708 15.8124 16.727 16.3902L17.1968 16.5917C18.054 16.9667 18.5651 17.1949 18.5651 17.8394C18.5651 18.3771 18.0676 18.7663 17.2889 18.7663ZM10.0054 18.7546C9.35968 18.7546 9.09111 18.3117 8.79587 17.7879L7.26603 18.7141C7.70921 19.6521 8.58063 20.4308 10.0854 20.4308C11.7508 20.4308 12.8917 19.5451 12.8917 17.599V11.1832H11.0124V17.5736C11.0124 18.513 10.6229 18.7546 10.0054 18.7546Z"
          fill="currentColor"
        />
      </svg>
    ),
    home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-home"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    menu: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-layout-grid"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
    tutorials: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-graduation-cap"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    openLink: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
    )
  };

  return icons[icon];
};

export default Icon;
