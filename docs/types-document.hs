-- a timestamp is just a unique string
data Timestamp = String

-- a timeline is a total order on timestamps
data Timeline = Timeline [Timestamp]

data SectorName = String
data ShipName = String
data RegistryNumber = String

-- an operation is a thing that can be done to change the state of the
-- world
data Operation =
  NewShipOperation { shipClass :: ShipClass, registryNumber :: RegistryNumber, shipName :: ShipName }
  | NewSectorOperation { sectorName :: SectorName }
  | ModifyShipOperation { registryNumber :: RegistryNumber, mod :: ShipModification }
  | AssignOperation { registryNumber :: RegistryNumber, sectorName :: SectorName }
    -- and so on and so forth

-- an event is an operation that happens at a time.
data Event = Event { operation :: Operation, timestamp :: Timestamp }

-- our basic model is the History, which is a set of events.
data History = History [Event]

-- a representation of a ship class, its initial statline and basic
-- information
data ShipClass = ShipClass { stats :: StatLine
                           , className :: ClassName
                           , weightInternal :: Integer
                           , weightExternal :: Integer
                           , buildTime :: BuildTime
                           -- and so on
                           }

data ModSlot = String
data ModName = String

data ShipModifier = ShipModifier { slot :: ModSlot
                                 , description :: String
                                 , name :: ModName
                                 , stats :: StatsChange
                                 -- And whatever else the a modifier
                                 -- can contribute to a ship's stats.
                                 }

data SectorState = SectorState { name :: SectorName
                               , position :: Point Integer Integer
                               -- and whatever else needs to be
                               -- tracked about sectors
                               }

data ShipState = ShipState { name :: ShipName
                           , modifiers :: [ShipModifier]
                           , assignedSector :: SectorName
                           -- and whatever else needs to be tracked
                           -- about individual ships
                           }

data ShipView = ShipView { name :: String
                             , statline :: StatLine
                             , captain :: String
                             , assignment :: SectorName
                             -- and whatever else the UI needs render
                             -- a ship
                             }

data WorldView = WorldView { state :: Map SectorName [ShipView] }

data WorldState = WorldState { sectors :: [SectorState], ships :: [ShipState] }

renderHistoryToWorldState :: History -> Timestamp -> WorldState
renderShip :: ShipState -> ShipView
renderWorldState :: WorldState -> WorldView
renderSector :: SectorState -> SectorView
