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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
        width="24"
        height="24"
      >
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" stroke-width="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
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
        class="lucide lucide-external-link"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    warning: (
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
        class="lucide lucide-alert-triangle"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
  };

  return icons[icon];
};

export default Icon;
