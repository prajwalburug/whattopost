"use client"

import React, { useState } from "react"

import SocialSelector, {
  Platform,
} from "./smoothui/ui/SocialSelector"
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const demoPlatforms: Platform[] = [
  {
    name: "Twitter",
    domain: "twitter.com",
    icon: <FaTwitter />,
    url: "https://x.com/prajwalburug13?s=21",
  },
  {
    name: "Instagram",
    domain: "instagram.com",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/whattopost13?igsh=MXc3cWU4d2M5YjVqZg==",
  },
]

const SocialSelectorDemo = () => {
  const [selected, setSelected] = useState<Platform>(demoPlatforms[0])
  return (
    <SocialSelector
      platforms={demoPlatforms}
      handle="whattopost"
      selectedPlatform={selected}
      onChange={setSelected}
      buttonText="Socials"
    />
  )
}

export default SocialSelectorDemo
