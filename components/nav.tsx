interface NBText {
  text: string;
  selected?: boolean;
}

export default function Navbar() {
  return (
    <nav class="flex flex-row text-white w-full items-center justify-center mt-6">
      <div class="w-1/3 flex items-center justify-center gap-4">
        <TruffleLogo />
        <p class="font-logo text-4xl">truffle</p>
      </div>
      <div class="w-1/3 flex items-center justify-center">
        <NavbarButton text="Creators" selected={true} />
        <NavbarButton text="Developers" />
        <NavbarButton text="Viewers" />
      </div>
      <div class="w-1/3 flex items-center justify-center">
        <a class="bg-pink-500 px-10 py-2 font-extrabold rounded-lg cursor-pointer transition hover:bg-pink-400 duration-100 ">
          Join the waitlist
        </a>
      </div>
    </nav>
  );
}

function TruffleLogo() {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.09677 42.7224C9.9959 43.8684 11.9386 44.7465 13.7403 45.1868C15.629 45.6485 17.845 45.7398 19.5684 44.5049C21.9635 42.7887 23.0116 40.7686 23.3737 38.5846C23.5428 37.5643 23.5562 36.5501 23.5382 35.6193C23.5304 35.2195 23.5178 34.851 23.5056 34.4945L23.5056 34.4943L23.5055 34.4923C23.4872 33.9566 23.4698 33.448 23.4698 32.8835C23.4698 31.6999 22.5129 30.7376 21.3291 30.7376C20.1454 30.7376 19.1884 31.6999 19.1884 32.8835C19.1884 33.4991 19.21 34.1495 19.2296 34.7385V34.7385L19.2297 34.7424C19.2412 35.0894 19.252 35.414 19.2576 35.7028C19.2741 36.5553 19.2539 37.2554 19.1502 37.881C18.9666 38.9887 18.512 39.9862 17.0787 41.0133C16.8866 41.151 16.2301 41.3778 14.7545 41.0172C13.3657 40.6777 11.6512 39.9056 9.82814 38.7505C6.16804 36.4315 2.49874 32.8449 0.524307 29.131C0.526333 29.1348 0.527359 29.1368 0.52762 29.1367C0.527888 29.1366 0.52735 29.1343 0.52626 29.1298C0.514924 29.0826 0.443834 28.7867 0.597465 28.0588C0.766955 27.2557 1.15035 26.2132 1.75705 24.9727C2.96496 22.5028 4.90077 19.5635 7.12766 16.7209C9.35066 13.8832 11.7979 11.2257 13.9836 9.30103C15.0792 8.3363 16.0648 7.59498 16.8885 7.10713C17.7758 6.5817 18.2278 6.5 18.3235 6.5C18.6364 6.5 19.1473 6.66316 19.8674 7.37017C20.5787 8.06863 21.2958 9.11052 21.9739 10.376C23.3253 12.8978 24.2977 15.879 24.7278 17.5186C25.0282 18.6638 26.1985 19.3503 27.3433 19.048C28.4876 18.746 29.1687 17.5718 28.8684 16.4271C28.7278 15.8908 28.5362 15.2269 28.2964 14.483C34.1304 11.232 40.8505 9.37981 48.0033 9.37981C55.2756 9.37981 62.1007 11.2945 68.0021 14.6473C67.619 15.7535 67.3264 16.7413 67.1315 17.4843C66.8313 18.629 67.5124 19.8032 68.6567 20.1052C69.8015 20.4075 70.9717 19.721 71.2722 18.5758C71.7023 16.9362 72.6747 13.955 74.0261 11.4332C74.7042 10.1677 75.4213 9.12584 76.1326 8.42737C76.8527 7.72037 77.3635 7.55721 77.6765 7.55721C77.7722 7.55721 78.2242 7.6389 79.1114 8.16433C79.9352 8.65218 80.9208 9.39351 82.0164 10.3582C84.2021 12.2829 86.6493 14.9404 88.8723 17.7781C91.0992 20.6207 93.035 23.56 94.2429 26.0299C94.8496 27.2705 95.233 28.3129 95.4025 29.116C95.5562 29.8439 95.4851 30.1398 95.4737 30.187C95.4726 30.1915 95.4721 30.1938 95.4724 30.1939C95.4725 30.1939 95.4728 30.1934 95.4734 30.1924L95.4757 30.1882C93.5013 33.9021 89.8319 37.4887 86.1719 39.8078C84.3488 40.9628 82.6343 41.7349 81.2455 42.0744C79.7699 42.435 79.1134 42.2082 78.9213 42.0705C77.488 41.0434 77.0334 40.0459 76.8498 38.9382C76.7461 38.3126 76.7259 37.6125 76.7424 36.76C76.748 36.4712 76.7588 36.1466 76.7703 35.7996L76.7704 35.7957C76.79 35.2067 76.8115 34.5563 76.8115 33.9407C76.8115 32.7571 75.8546 31.7948 74.6708 31.7948C73.4871 31.7948 72.5301 32.7571 72.5301 33.9407C72.5301 34.5052 72.5128 35.0138 72.4945 35.5495L72.4944 35.5515C72.4822 35.908 72.4696 36.2766 72.4618 36.6765C72.4438 37.6073 72.4572 38.6215 72.6263 39.6418C72.9884 41.8258 74.0365 43.8459 76.4316 45.5621C78.1549 46.797 80.3709 46.7057 82.2597 46.244C84.1139 45.7908 86.1176 44.874 88.0693 43.6787C88.3841 45.7144 88.5474 47.8001 88.5474 49.9239C88.5474 72.3158 70.3952 90.4681 48.0033 90.4681C25.6114 90.4681 7.45912 72.3158 7.45912 49.9239C7.45912 47.4662 7.6778 45.0596 8.09677 42.7224Z"
        fill="#F357A1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70.0343 68.1493C70.0343 75 60.111 75 47.8701 75C35.6292 75 25.7059 75 25.7059 68.1493C25.7059 57.0211 35.6292 48 47.8701 48C60.111 48 70.0343 57.0211 70.0343 68.1493ZM44.9393 63.0945C44.9393 66.6864 42.5569 69.5982 39.6181 69.5982C36.6793 69.5982 34.297 66.6864 34.297 63.0945C34.297 59.5027 36.6793 56.5909 39.6181 56.5909C42.5569 56.5909 44.9393 59.5027 44.9393 63.0945ZM55.5724 69.5982C58.5112 69.5982 60.8935 66.6864 60.8935 63.0945C60.8935 59.5027 58.5112 56.5909 55.5724 56.5909C52.6336 56.5909 50.2513 59.5027 50.2513 63.0945C50.2513 66.6864 52.6336 69.5982 55.5724 69.5982Z"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
  );
}

function NavbarButton({ text, selected }: NBText) {
  return (
    <div>
      {selected
        ? (
          <a class="text-white border-2 border-white border-solid rounded-md hover:text-gray-200 px-8 py-2 text-xl font-medium font-main cursor-pointer">
            {text}
          </a>
        )
        : (
          <a class="text-white border-transparent border-2 rounded-md hover:text-gray-200 px-8 py-2 text-xl font-medium font-main cursor-pointer">
            {text}
          </a>
        )}
    </div>
  );
}
